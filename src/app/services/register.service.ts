import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel as User } from '../components/models/user.model';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url: string = GlobalConstants.apiUrl+'register';

  constructor(private http: HttpClient) { }


  register(user: User) {
    return this.http.post(this.url,user);
  }
}
