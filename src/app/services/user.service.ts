import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { UserModel } from '../components/models/user.model';
import { UserDetails } from '../components/models/user.extended.model';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: LoginService, private http: HttpClient) {

  }
  /*should change when new user details api is created */
  get(user: UserModel){
    return this.http.post<UserDetails>(URLS.LOGIN, user);
  }
}
