import { Component, ViewChild } from '@angular/core';
import { ModalUploadBoxComponent } from './modal-upload-box/modal-upload-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('modalUploadBox') modalUploadBox!: ModalUploadBoxComponent;
  title = 'webapp';
}
