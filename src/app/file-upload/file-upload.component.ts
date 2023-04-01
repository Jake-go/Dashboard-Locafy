import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  uploadForm: FormGroup;
  message: string = "Bonjour";
  files: string[] = [];

  constructor(private formBuilder: FormBuilder, private fileUploadService: FileUploadService) {
    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
  }

  ngOnInit(): void {}

  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file')?.setValue(file);
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file')?.value);
    this.fileUploadService.uploadFile(formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    console.log('File upload form submitted');
  }
}
