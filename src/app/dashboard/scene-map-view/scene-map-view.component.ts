import { Component, OnInit, Input } from '@angular/core';
import { Scene } from 'src/app/models/scene.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';

let mapState: Boolean;

@Component({
  selector: 'app-scene-map-view',
  templateUrl: './scene-map-view.component.html',
  styleUrls: ['./scene-map-view.component.css']
})
export class SceneMapViewComponent {
  scenes: Scene[] = [];
  mapState = true;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = +params['projectId'];
      this.dashboardService.getProject(projectId).subscribe((project) => {
        if (project) {
          this.scenes = project.scenes;
        }
      });
    });
  }

  goToProjects(): void {
    this.router.navigate(['/dashboard/projects']);
  }

  initMap(): void {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 6,
        center: { lat: 41.85, lng: -87.65 },
      }
    );

    directionsRenderer.setMap(map);

  }

  calculateAndDisplayRoute(
    address: string)
    {
      let directionsService: google.maps.DirectionsService;
      let directionsRenderer: google.maps.DirectionsRenderer;

      const waypts: google.maps.DirectionsWaypoint[] = [];

      // #TODO push the waypt from address here

      // directionsService
      //   .route({
      //     origin: "3018 Richview Blvd. Oakville",
      //     destination: address,
      //     waypoints: waypts,
      //     optimizeWaypoints: true,
      //     travelMode: google.maps.TravelMode.DRIVING
      //   })
      //   .then((response => {
      //     directionsRenderer.setDirections(response);

      //     const route = response.routes[0];
          
      //   }))
      //   .catch((e) => window.alert("Directions request failed due to "+ status));
    }
    
  selectLocation(streetNum: string, streetName: string, city: string): void {

    let address = "";
    address.concat(streetNum, streetName, city);

    

    this.calculateAndDisplayRoute(address)
    
  }
}

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;
