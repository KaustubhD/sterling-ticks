import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CredentialModel as User} from '../models/credential.model';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cred : User = new User();
  alert: boolean = false;
  success: boolean = false;
  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {

  }
  authenticate() {
    let res = this.service.authenticate(this.cred).subscribe({
      next: data => {
        data = this.cred;
        this.onSuccess();
      },
      error: error => {
        let errorMessage = error.message;
        this.alert = true;
      }
    });
  }

  onSuccess(){
    this.success = true;
    setTimeout(()=>{ this.router.navigate(['home']) }, 700);
  }
}



