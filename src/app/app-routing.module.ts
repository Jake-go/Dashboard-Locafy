import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { ScenesComponent } from './dashboard/scenes/scenes.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LocationsComponent } from './dashboard/locations/locations.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:projectId/scenes', component: ScenesComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'contacts', component: ContactsComponent }
    ], 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'maps', component: GoogleMapsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
