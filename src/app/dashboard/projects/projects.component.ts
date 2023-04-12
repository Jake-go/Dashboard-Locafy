import { Component, OnInit } from '@angular/core';
import { ProjectTile } from 'src/app/models/project-tile.model';
import { Scene } from 'src/app/models/scene.model';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private projectsSubscription: Subscription | null = null;
  selectedProject: ProjectTile | null = null;
  projects: ProjectTile[] = [];

  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.projectsSubscription = this.dashboardService.projects$.subscribe((projects: ProjectTile[]) => {
      this.projects = projects;
    });
    this.dashboardService.getProjects();
  }

  ngOnDestroy(): void {
    if (this.projectsSubscription) {
      this.projectsSubscription.unsubscribe();
    }
  }

  onProjectSelected(project: ProjectTile) {
    this.router.navigate(['dashboard', 'projects', project.id, 'scenes']);
  }
}
