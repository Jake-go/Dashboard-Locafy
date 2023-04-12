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
  constructor(private http: HttpClient) { }

  // get a list of scenes from a screenplay
  getScenesFromScreenplay(formData: FormData) {
    return this.http.post<SceneList>('/pdfapi/v1/extractor', formData);
  }

  //create a new project
  addProject(project: ProjectTile) {
    return this.http.post<ProjectTile>('/api/projects/', project);
  }
}
