import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../models/user.extended.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  user: UserModel;
  islogged: boolean=false;
  addresses: {"name" : '', "address": ''}[] = [];

  constructor(private authService: LoginService, private userService: UserService) {
    this.authService.loggedIn.subscribe(islogged => {
      this.islogged = islogged;
    });
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
    });

    console.log(this.islogged);
  }

  ngOnInit(): void {
  };

}
