import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {
  islogged: boolean = true;
  user:UserModel = {
    "userName": "Arnab",
    "email": "user@mail",
    "dateCreated": "2021-06-17T17:15:30.415+00:00",
    "phoneNo": '',
    confirmpwd: '',
    "password": '',
    "profileImg": 'assets/images/user/default.png',
    roles: []
};
  constructor(private service: LoginService) { }

  ngOnInit(): void {

  }
}