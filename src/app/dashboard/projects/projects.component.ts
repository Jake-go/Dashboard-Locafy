import { Component, OnInit } from '@angular/core';
import { ProjectTile } from 'src/app/models/project-tile.model';
import { Scene } from 'src/app/models/scene.model';
import { Router } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  selectedProject: ProjectTile | null = null;
  projects: ProjectTile[] = [];

  constructor(private router: Router, private dashboardService: DashboardServiceService) {}

  ngOnInit(): void {
    this.projects = this.dashboardService.getProjects();
  }

  onProjectSelected(project: ProjectTile) {
    this.router.navigate(['dashboard', 'projects', project.id, 'scenes'])
  }
}
