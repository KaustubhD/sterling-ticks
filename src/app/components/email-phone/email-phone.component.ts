import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-email-phone',
	templateUrl: './email-phone.component.html',
	styleUrls: ['./email-phone.component.css']
})
export class EmailPhoneComponent implements OnInit {
	public email: String | undefined
	public phone: String | undefined

	constructor(private router: Router, private route: ActivatedRoute) {
		route.queryParams.subscribe(params => {
			// TODO: Remove this if
			if(!params.id) {
				router.navigate(['/email-phone'], {
					queryParams: {
						email: btoa("abc@gmail.com"),
						phone: btoa("9944336677")
					}
				})
			}
			this.email = params.email && atob(params.email)
			this.phone = params.phone && atob(params.phone)
		})
	}

	ngOnInit(): void {
	}

	onSend(choice: Number) {
			if(choice == 1) {
				// this.http.post("/otp/generate", {email: this.email})
			}
			else if (choice == 2){
				// this.http.post("/otp/generate", {phone: this.phone})
			}
			else {
				// Do nothing
				return
			}
			this.router.navigate(['/otp']);
	}
}
