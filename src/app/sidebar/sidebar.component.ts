import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ModalUploadBoxComponent } from '../modal-upload-box/modal-upload-box.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(public dialog: MatDialog) {}

  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '500px',
    height: '',
    position: {
        top: '12rem',
        bottom: '',
        left: '48rem',
        right: ''
    }
  };

  openUploadModal(): void {
    this.dialog.open(ModalUploadBoxComponent, this.config);
  }
}
