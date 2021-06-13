import { Injectable } from '@angular/core';
import { CredentialModel as user } from '../components/models/credential.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = GlobalConstants.apiUrl+'login';

  constructor(private http: HttpClient) { }
  

  authenticate(user: user) {
    return this.http.post(this.url + "login", user);
  }
}
