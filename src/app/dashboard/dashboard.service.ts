import { Injectable } from '@angular/core';
import { ProjectTile } from '../models/project-tile.model';
import { SceneList } from '../models/sceneList.model';
import { HttpClient, HttpEvent, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private projectsSubject = new BehaviorSubject<ProjectTile[]>([]);
  projects$ = this.projectsSubject.asObservable();

  constructor(private http: HttpClient) { }

  // Define the method to upload the file
  uploadFile(formData: FormData): Observable<HttpEvent<any>> {
    const apiUrl = '/file-api/fileUploading/';

    const req = new HttpRequest('POST', apiUrl, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  // get a list of scenes from a screenplay
  getScenesFromScreenplay(formData: FormData): Observable<HttpEvent<SceneList>> {
    const apiUrl = '/pdfapi/v1/extractor';

    const req = new HttpRequest('POST', apiUrl, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request<SceneList>(req);
  }

  //create a new project, update the list of projects
  addProject(project: ProjectTile): Observable<HttpEvent<ProjectTile>> {
    const apiUrl = '/api/projects/';

    const req = new HttpRequest('POST', apiUrl, project, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request<ProjectTile>(req).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          project.id = event.body?.id ?? 0;
          project.title = event.body?.title ?? 'Title Not Found';
          const currentProjects = this.projectsSubject.getValue();
          this.projectsSubject.next([...currentProjects, project as ProjectTile]);
        }
      })
    );
  }

  getProjects(): void {
    this.http.get<ProjectTile[]>('/api/projects').subscribe((projects) => {
      this.projectsSubject.next(projects);
    });
  }

  getProject(id: number) {
    return this.http.get<ProjectTile>(`/api/projects/${id}`);
  }
}
