import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean = false;
  user : UserModel;
  constructor(private authService: LoginService) {
    this.authService.loggedIn.subscribe( islogged => {
      this.logged = islogged;
  });
    this.authService.getAuthenticatedUser().subscribe( user => {
      this.user = user;
    })
   }
  ngOnInit(): void {

  }

}
