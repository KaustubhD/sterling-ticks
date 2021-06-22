import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../components/models/user.model';
import { URLS } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  constructor(private http: HttpClient) { }

  updateProfileImg(user: UserModel) {
    return this.http.put<Boolean>(URLS.UPDATE_PROFILE_IMAGE,user).subscribe();
  }
}
