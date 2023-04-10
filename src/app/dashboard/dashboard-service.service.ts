import { Injectable } from '@angular/core';
import { ProjectTile } from '../models/project-tile.model';
import { Scene } from '../models/scene.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private projectsSubject = new BehaviorSubject<ProjectTile[]>([]);
  projects$ = this.projectsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProjects(): void {
    this.http.get<ProjectTile[]>('/api/projects').subscribe((projects) => {
      this.projectsSubject.next(projects);
    });

    // return this.http.get<ProjectTile[]>('/api/projects');
  }

  getProject(id: number) {
    return this.http.get<ProjectTile>(`/api/projects/${id}`);
  }
}
