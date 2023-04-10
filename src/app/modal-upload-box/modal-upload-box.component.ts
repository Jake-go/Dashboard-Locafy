import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedWorkspaceService } from '../workspace/shared-workspace.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SceneList } from '../models/sceneList.model';
import { ProjectTile } from '../models/project-tile.model';
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
  private myModal: any;

  constructor(public dialogReg: MatDialogRef<ModalUploadBoxComponent>,
              private formBuilder: FormBuilder,
              private sharedWorkSpaceService: SharedWorkspaceService) 
    {
    this.uploadForm = this.formBuilder.group({
      screenplayTitle: ['']
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }

  // uploadFile() {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', this.selectedFile, this.selectedFile.name);
  //     const file = this.selectedFile;

  //     this.sharedWorkSpaceService.uploadFile(formData).subscribe(
  //       (response) => {
  //         console.log('File uploaded successfully: ', response)
  //         this.getSceneListFromScreenPlay(formData);
  //         this.selectedFile = null;
  //         this.fileName = '';
  //         this.uploadForm.reset();
  //       },
  //       (error) => {
  //         console.log('Error uploading file: ', error)
  //       }
  //     );
  //   }
  // }

  onCancel(): void {
    this.dialogReg.close();
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      const file = this.selectedFile;

      this.sharedWorkSpaceService.uploadFile(formData).subscribe(
        (response) => {
          console.log('File uploaded successfully: ', response)
          this.getSceneListFromScreenPlay(formData);
          this.selectedFile = null;
          this.fileName = '';
          this.uploadForm.reset();
        },
        (error) => {
          console.log('Error uploading file: ', error)
        }
      );
    }
    this.dialogReg.close();
  }

  getSceneListFromScreenPlay(formData: FormData) {
    this.sharedWorkSpaceService.getScenesFromScreenplay(formData).subscribe(
      (response: any) => {
        const sceneListData = response.content.sceneList;
        const sceneList = new SceneList(sceneListData);
        const screenPlayTitle = this.uploadForm.get('screenplayTitle')?.value || 'Untitled Screenplay';
        const newProject = new ProjectTile(0, screenPlayTitle, ["Jim Halpert", "Will Smith"], sceneList.sceneList);
        this.sharedWorkSpaceService.addProject(newProject, () => {
          console.log('Projects list should be refreshed now');
          this.dialogReg.close();
        });
      },
      (error) => {
        console.log('Error getting scenes from screenplay: ', error)
      });
  }

  ngOnInit(): void {
  }
}

