import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'projects', component: ProjectsComponent }
    ], 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
