import { Injectable } from '@angular/core';
import { ProjectTile } from '../models/project-tile.model';
import { Scene } from '../models/scene.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private projects: ProjectTile[] = [
    // Add your project tiles here, e.g.:
    new ProjectTile(1, 'Generic Movie', ['John Doe', 'Jane Smith'], 
      [
        new Scene(1, 'INT.', 'PROTAGONIST HOME', 'Day', "1, 2", '123', 'Generic Street', 'A1B 2C3', 'Generic City', 'Generic Province', 'Canada'), 
        new Scene(2, 'EXT. ', 'ANTAGONIST HOME', 'Night', "3", '321', 'General Street', 'A1B 4C3', 'Toronto', 'Ontario', 'Canada'),
        new Scene(3, 'INT.', 'QUEEN STREET', 'Day', "4, 5, 6", '', '', '', '', '', ''),

      ]),
    new ProjectTile(2, 'Project 2', ['Mike Johnson', 'Anna Brown']),
    new ProjectTile(3, 'Team Force X', ['Dwight Schrute', 'Pam Beasley'])
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProject(id: number) {
    return this.projects.find(project => project.id === id) || null;
  }
}
