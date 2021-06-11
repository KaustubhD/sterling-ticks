import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  auth: RegisterModel=new RegisterModel();
  flag: boolean=false;
  alert:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
register(){
  if(this.auth.pwd==this.auth.confirmpwd){
  this.flag=true;
  this.router.navigate(['login']); 
}
else{
  this.alert=true;
}
}
}
