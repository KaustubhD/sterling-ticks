import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CredentialModel as User } from '../models/credential.model';
import { delay } from "rxjs/operators";
import { UserModel } from '../models/user.model';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cred: User = new User();
  alert: boolean = false;
  success: boolean = false;
  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }
  authenticate() {
    this.service.authenticate(this.cred).subscribe({
      next: data => {
        this.success = true;
        this.onSuccess(data);
      },
      error: error => {
        let errorMessage = error.message;
        this.alert = true;
      }
    });
  }

  onSuccess(user: UserModel) {

    this.service.saveAuthenticatedUser(user);
    setTimeout(() => {
      let head = new HeaderComponent(this.service);
      this.router.navigate(['home']);
    }, 700);

  }
}



