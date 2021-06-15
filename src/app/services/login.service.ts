import { Injectable } from '@angular/core';
import { CredentialModel as user } from '../components/models/credential.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { UserModel } from '../components/models/user.model';
import { Roles } from '../components/models/role.model';

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
    return this.http.post<UserModel>(GlobalConstants.URLS.LOGIN, user);
  }
  
  saveAuthenticatedUser(user: UserModel) {
    this.loggedIn = true;
    this.authenticatedUser = user;
  }

  isAdmin(): boolean {
	return this.getAuthenticatedUser().roles.some(({role}) => role == Roles.AD)
  }
}
