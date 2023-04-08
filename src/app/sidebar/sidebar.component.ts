import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ModalUploadBoxComponent } from '../modal-upload-box/modal-upload-box.component';
import { SharedWorkspaceService } from '../workspace/shared-workspace.service';
import { SceneList } from '../models/sceneList.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  public sharedWorkSpaceService: any;

  constructor(public dialog: MatDialog, sharedWorkSpaceService: SharedWorkspaceService) {}

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
