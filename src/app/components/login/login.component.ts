import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: RegisterModel=new RegisterModel();
  flag: boolean=false;
  alert: boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
authenticate(){
  if(this.auth.email=="angular" && this.auth.pwd=="google"){
  this.flag=true;
  this.router.navigate(['register']) 
  }
 else
 this.alert=true;

  
}

}
