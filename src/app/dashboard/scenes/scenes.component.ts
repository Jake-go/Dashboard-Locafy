import { Component, OnInit, Input } from '@angular/core';
import { Scene } from 'src/app/models/scene.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css'],
  animations: [
    trigger('toggleMap', [
      state('hidden', style({ width: '0' })),
      state('visible', style({ width: '50%' })),
      transition('hidden <=> visible', animate('500ms ease-in-out'))
    ]),
    trigger('toggleTable', [
      state('hidden', style({ width: '0' })),
      state('visible', style({ width: '50%' })),
      transition('hidden <=> visible', animate('500ms ease-in-out'))
    ])
  ]
})
export class ScenesComponent {
  projectId: number = 0 ;
  scenes: Scene[] = [];
  mapVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = +params['projectId'];
      this.dashboardService.getProject(projectId).subscribe((project) => {
        if (project) {
          this.scenes = project.scenes;
          this.projectId = project.id;
        }
      });
    });
  }

  goToProjects(): void {
    this.router.navigate(['/dashboard/projects']);
  }

  toggleMapView(): void {
    this.mapVisible = !this.mapVisible;
  }
  
}
