import { Injectable } from '@angular/core';
import { CredentialModel as user } from '../components/models/credential.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants, URLS } from '../common/global-constants';
import { UserModel } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticatedUser : UserModel;
  public getAuthenticatedUser(){
    return this.authenticatedUser;
  }
  loggedIn : boolean= false;
  constructor(private http: HttpClient) { }
  

  authenticate(user: user) {
    return this.http.post<UserModel>(URLS.LOGIN, user);
  }
  saveAuthenticatedUser(user: UserModel) {
    this.loggedIn = true;
    this.authenticatedUser = user;
  }
}
