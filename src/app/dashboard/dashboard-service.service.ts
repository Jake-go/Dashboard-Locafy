import { Injectable } from '@angular/core';
import { ProjectTile } from '../models/project-tile.model';
import { Scene } from '../models/scene.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<ProjectTile[]>('/api/projects');
  }

  getProject(id: number) {
    return this.http.get<ProjectTile>(`/api/projects/${id}`);
  }
}
