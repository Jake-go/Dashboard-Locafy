import { Component, OnInit } from '@angular/core';
import { ProjectTile } from 'src/app/models/project-tile.model';
import { Scene } from 'src/app/models/scene.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  selectedProject: ProjectTile | null = null;
  projects: ProjectTile[] = [
    // Add your project tiles here, e.g.:
    new ProjectTile('Generic Movie', ['John Doe', 'Jane Smith'], 
      [
        new Scene(1, 'In', 'Generic Location', 'Day', 1, '123', 'Generic Street', 'A1B 2C3', 'Generic City', 'Generic Province', 'Canada'), 
        new Scene(2, 'Out', 'General Location', 'Night', 2, '321', 'General Street', 'A1B 4C3', 'Toronto', 'Ontario', 'Canada')
      ]),
    new ProjectTile('Project 2', ['Mike Johnson', 'Anna Brown']),
    new ProjectTile('Team Force X', ['Dwight Schrute', 'Pam Beasley'])
    
  ];

  constructor() {}

  ngOnInit(): void {}

  onProjectSelected(project: ProjectTile) {
    this.selectedProject = project;
  }
}
