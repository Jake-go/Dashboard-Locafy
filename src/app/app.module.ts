import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModalUploadBoxComponent } from './modal-upload-box/modal-upload-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { ScenesComponent } from './dashboard/scenes/scenes.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { SceneMapViewComponent } from './dashboard/scene-map-view/scene-map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ModalUploadBoxComponent,
    DashboardComponent,
    LandingPageComponent,
    LoginPageComponent,
    ProjectsComponent,
    ScenesComponent,
    GoogleMapsComponent,
    SceneMapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [ModalUploadBoxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
