import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CartItemsService } from 'src/app/services/shared/cart-item/cart-items.service';
import { PaymentModel } from '../models/payment.model';
import { PlaceOrderModel } from '../models/placeorder.model';
import { AddressModel } from '../models/address.model';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

	payment: PaymentModel = new PaymentModel();
	name: string;
	totalPrice: number = 0;
	paymentSuccess: boolean | undefined;
	month: number;
	year: number;
	addressId: number;
	order: PlaceOrderModel = new PlaceOrderModel();
	currentDate: string;
	currentYear: string;
	currentMonth: string;
	greater: boolean | undefined;

	constructor(private service: LoginService, private cartService: CartItemsService, private router: Router) {
		this.service.getAuthenticatedUser().subscribe(user => {
			this.name = user.userName;
			cartService.getTotalAmount(this.name).subscribe(() => {
				this.totalPrice = cartService.totalPrice;
				if (this.totalPrice == 0) {
					router.navigate(['/products'])
				}
			});
		});
		this.currentDate = formatDate(new Date(), 'yyyy/MM/dd', 'en')
		this.currentYear = this.currentDate.substr(0, 4);
		this.currentMonth = this.currentDate.substr(5, 2);

	}

	ngOnInit(): void { }

	onPaymentSuccess() {
		let validDate = this.checkExpiryDate()
		if(validDate){
		this.payment.expiry = new Date(this.year, this.month)
		this.cartService.saveCard(this.payment, this.name).then((res: any) => {
			this.payment.paymentMethodId = res.id
			this.order.transaction.paymentMethodId = res.id
			this.order.userName = this.name
			this.order.addressId = this.addressId
			this.order.transaction.amount = this.totalPrice
			this.cartService.placeOrder(this.order).then((res: any) => {
				let result: boolean = res.result;
				this.paymentSuccess = result;
				if(this.paymentSuccess == true){
					this.router.navigate(['/success'])
				}
			}).catch((e) => {
				throw e;
			})
		}).catch(() => {
			this.paymentSuccess = false;
		})
		}
	}

	setAddress(address: AddressModel) {
		this.addressId = address.id;
	}

	checkExpiryDate(){
		if(isNaN(this.year) || isNaN(this.month)){
			this.greater = false
		}else{
			this.greater = parseInt(this.currentYear) < this.year ? true: (parseInt(this.currentMonth) <= this.month) ? true : false;
		}
		return this.greater
	}

}
