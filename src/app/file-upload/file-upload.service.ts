import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FileUploadService {

    // Inject HttpClient into the component or service
    constructor(private http: HttpClient) {}

    // Define the method to upload the file
    uploadFile(formData: FormData) {
        // Make http post request over api;
        return this.http.post('http://localhost:8080/api/fileUploading/', formData);
    }
}
