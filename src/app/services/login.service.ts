import { Injectable } from '@angular/core';
import { CredentialModel as user } from '../components/models/credential.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = '';

  constructor(private http: HttpClient) { }
  

  authenticate(user: user) {
    return this.http.post(this.baseUrl + "login", user);
  }
}
