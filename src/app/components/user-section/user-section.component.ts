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
  user:UserModel;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.service.getAuthenticatedUser().subscribe(
      user =>{
        this.user = user;
        if(this.user.profileImg==null){
          this.user.profileImg='assets/images/user/default.png';
        }
      }
   );  
   this.service.loggedIn.subscribe(
     logged =>{
       this.islogged=logged;
     }
   )
  }
}
