import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel as User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl: string = '';

  constructor(private http: HttpClient) { }


  register(user: User) {
    return this.http.post(this.baseUrl+"register",user);
  }
}
