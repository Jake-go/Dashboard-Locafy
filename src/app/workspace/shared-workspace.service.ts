import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedWorkspaceService {

  // Inject HttpClient into the component or service
  constructor(private http: HttpClient) {}

  // Define the method to upload the file
  uploadFile(formData: FormData) {
    return this.http.post('/api/fileUploading/', formData);
  }
}
