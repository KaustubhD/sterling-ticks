import { Injectable } from '@angular/core';
import { CredentialModel as user } from '../components/models/credential.model';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../common/global-constants';
import { UserModel } from '../components/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public authenticatedUser : BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());
  public getAuthenticatedUser(){
    return this.authenticatedUser;
  }
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  

  authenticate(user: user) {
    return this.http.post<UserModel>(URLS.LOGIN, user);
  }
  saveAuthenticatedUser(user: UserModel) {
    this.loggedIn.next(true);
    this.authenticatedUser.next(user);
  }
}
