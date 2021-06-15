import { Injectable } from '@angular/core';
import { HttpClient,  HttpEventType } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  url = GlobalConstants.apiUrl+'upload/';
  constructor(private http: HttpClient) { }

  async submit(uploadData: FormData) {
    return this.http.post(GlobalConstants.apiUrl+'upload', uploadData, {
      reportProgress: true,
      observe: 'events'   
    });
  }
}
