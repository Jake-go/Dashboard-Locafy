import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedWorkspaceService } from '../workspace/shared-workspace.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SceneList } from '../models/sceneList.model';
import { ProjectTile } from '../models/project-tile.model';
import { DashboardService } from '../dashboard/dashboard.service';
import { HttpEventType } from '@angular/common/http';
import { Scene } from '../models/scene.model';

@Component({
  selector: 'app-modal-upload-box',
  templateUrl: './modal-upload-box.component.html',
  styleUrls: ['./modal-upload-box.component.css']
})
export class ModalUploadBoxComponent implements OnInit {
  uploadForm: FormGroup;
  fileName = '';
  selectedFile: File | null = null;
  uploadProgress = 0;

  constructor(public dialogReg: MatDialogRef<ModalUploadBoxComponent>,
    private formBuilder: FormBuilder,
    private sharedWorkSpaceService: SharedWorkspaceService,
    private dashboardService: DashboardService) {
    this.uploadForm = new FormGroup({
      'projectTitle': new FormControl(null, Validators.required),
      'selectedFile': new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length) {
      this.selectedFile = files[0];
      this.uploadForm.patchValue({ 'selectedFile': this.selectedFile });
    }
  }

  onCancel(): void {
    this.dialogReg.close();
  }

  onUpload(): void {
    if (this.uploadForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    const formData = new FormData();
    formData.append('projectTitle', this.uploadForm.value.projectTitle);
    formData.append('file', this.selectedFile as File);

    console.log('Form Submitted: ', formData);

    this.dashboardService.uploadFile(formData).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((event.loaded / (event.total ?? 1)) * 33);
        } else if (event.type === HttpEventType.Response) {
          console.log('File Uploaded Successfully: ', event.body);
          this.getSceneListFromScreenPlay(formData);
        }
      },
      error => {
        console.log('Error Uploading File: ', error);
        this.uploadProgress = 0;
      }
    );
  }

  getSceneListFromScreenPlay(formData: FormData) {
    this.dashboardService.getScenesFromScreenplay(formData).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = 33 + Math.round((event.loaded / (event.total ?? 1)) * 33);
        } else if (event.type === HttpEventType.Response) {
          console.log('Received SceneList: ', event.body);
          const scenes: Scene[] = (event.body?.content?.sceneList) ?? [];
          const projectTitle = this.uploadForm.value.projectTitle;
          const newProject = new ProjectTile(0, projectTitle, [], scenes);
          this.addProject(newProject);
        }
      },
      error => {
        console.log('Error getting SceneList: ', error);
        this.uploadProgress = 0;
      }
    );
  }

  //adds a new project to the database
  addProject(newProject: ProjectTile): void {
    this.dashboardService.addProject(newProject).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = 66 + Math.round((event.loaded / (event.total ?? 1)) * 33);
        } else if (event.type === HttpEventType.Response) {
          console.log('Project Added Successfully: ', event.body);
          this.uploadProgress = 0;
          this.uploadForm.reset();
          this.dialogReg.close();
        }
      },
      error => {
        console.log('Error Adding Project: ', error);
        this.uploadProgress = 0;
      }
    );
  }
}
