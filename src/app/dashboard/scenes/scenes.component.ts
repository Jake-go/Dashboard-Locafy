import { Component, OnInit, Input } from '@angular/core';
import { Scene } from 'src/app/models/scene.model';
import { ActivatedRoute } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent {
  scenes: Scene[] = [];

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = +params['projectId'];
      const project = this.dashboardService.getProject(projectId);

      if (project) {
        this.scenes = project.scenes;
      }
    });
  }
}
