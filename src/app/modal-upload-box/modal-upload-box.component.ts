import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedWorkspaceService } from '../workspace/shared-workspace.service';
import { MatDialogRef } from '@angular/material/dialog';

declare var bootstrap: any;

@Component({
  selector: 'app-modal-upload-box',
  templateUrl: './modal-upload-box.component.html',
  styleUrls: ['./modal-upload-box.component.css']
})
export class ModalUploadBoxComponent implements OnInit {

  fileName = '';
  screenplayUploadForm: FormGroup;
  selectedFile: File | null = null;
  private myModal: any;
  @ViewChild('cancelButton') cancelButton!: ElementRef;
  @ViewChild('uploadModal') uploadModal!: ElementRef;

  constructor(public dialogReg: MatDialogRef<ModalUploadBoxComponent>, private renderer: Renderer2, private formBuilder: FormBuilder, private sharedWorkSpaceService: SharedWorkspaceService) {
    console.log('ModalUploadBoxComponent constructor called');

    this.screenplayUploadForm = this.formBuilder.group({
      file: ['']
    });
  }

  onFileSelected(event:any) {
    const file:File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }

  uploadFile() {
    if(this.selectedFile){
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.sharedWorkSpaceService.uploadFile(formData).subscribe(
        (response) => {
          console.log('File uploaded successfully: ', response)
         //reset the form and close the modal
         this.selectedFile = null;
         this.fileName = '';
         
        },
        (error) => {
          console.log('Error uploading file: ', error)
        }
      );
    }
  }

  onCancel(): void{
    this.dialogReg.close();
  }

  onUpload(): void{
    this.uploadFile();
    this.dialogReg.close();
  }



  ngOnInit(): void {
  }
}
