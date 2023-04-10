import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { SceneList } from '../models/sceneList.model';
import { ProjectTile } from '../models/project-tile.model';

@Injectable({
  providedIn: 'root'
})
export class SharedWorkspaceService {

  // Inject HttpClient into the component or service
  constructor(private http: HttpClient) {}

  // Define the method to upload the file
  uploadFile(formData: FormData) {
    return this.http.post('/file-api/fileUploading/', formData);
  }

  // get a list of scenes from a screenplay
  getScenesFromScreenplay(formData: FormData) {
    return this.http.post<SceneList>('/pdfapi/v1/extractor', formData);
  }

  addProject(project: ProjectTile, callback: () => void) {
    console.log('Adding project with payload:', JSON.stringify(project));
    return this.http.post<ProjectTile>('/api/projects/', project).subscribe(
      (response) => {
        console.log('Project added successfully: ', response);
        callback();
      },
      (error) => {
        console.log('Error adding project: ', error);
      }
    );
  }
}
