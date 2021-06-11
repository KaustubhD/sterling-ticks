import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-phone',
  templateUrl: './email-phone.component.html',
  styleUrls: ['./email-phone.component.css']
})
export class EmailPhoneComponent implements OnInit {
  @Input() item = "";
  constructor(private router : Router) { 
  }

  ngOnInit(): void {
  }

  onSend(){
    this.router.navigate(['/otp']);
  }
}
