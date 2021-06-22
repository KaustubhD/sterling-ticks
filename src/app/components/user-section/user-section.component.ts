import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {
  islogged: boolean = true;
  user:UserModel;
  select: string = 'none';
  response: Array<any> = new Array<any>();
  constructor(private authService: LoginService, private userService : UserProfileService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(
      user =>{
        this.user = user;
        if(this.user.userImage==null){
          this.user.userImage='assets/images/user/default.png';
        }
      }
   );  
   this.authService.loggedIn.subscribe(
     logged =>{
       this.islogged=logged;
     }
   );

   this.select="none";
  }

  addressSelected(){
    this.select="address";
  }

  paymentSelected(){
    this.select="payment";
  }

  updateImg(){
    if(this.response.length!=0){
      this.user.userImage=this.response[this.response.length-1].data.secure_url;
      this.userService.updateProfileImg(this.user);
      this.authService.saveAuthenticatedUser(this.user);
      setTimeout(() => {
        this.select = 'none';
        this.response.length=0;
      }, 400);
    }
  }
}
