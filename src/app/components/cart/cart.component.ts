import { Component, Input, OnInit } from '@angular/core';
import { vouchers } from 'src/app/common/vouchers';
import { LoginService } from 'src/app/services/login.service';
import { CartItemsService } from 'src/app/services/shared/cart-item/cart-items.service';
import { CartItemModel, CartModel } from '../models/cart.model';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	cartItems: CartItemModel[] = [];
	userName: string;

	constructor(private service: CartItemsService, private loginService: LoginService) {
		loginService.getAuthenticatedUser().subscribe(user => {
			this.userName =  user.userName
		})
		this.service.getUserCart(this.userName).then((cart: CartModel) => {
			this.cartItems = cart.orderItems;
		})
	}

	ngOnInit(): void { }

	totalPrice: number = 0;
	discountPrice: number = 0;
	voucherInput: String;
	voucherDiscount: number = 0;
	voucherApplied: boolean | undefined;

	getDiscountPrice() {
		this.cartItems.forEach(({product: item, quantity}, index) => {
			if (index == 0) {
				this.discountPrice = 0;
			}
			if (quantity >= 1) {
				this.discountPrice += (item.price * item.discount * quantity / 100);
			}
		});
		return this.discountPrice;
	}

	getTotalPrice() {
		this.totalPrice -= this.totalPrice
		this.cartItems.forEach(({product: item, quantity}) => {
			if (quantity >= 1) {
				this.totalPrice += (item.price * quantity)
			}
		})

		return this.totalPrice
	}

	getTotalAmount() {
		if(this.voucherApplied)
			return this.totalPrice - this.discountPrice - this.voucherDiscount

		return this.totalPrice - this.discountPrice
	}

	removeItem(productId: number) {
		var ans = confirm('Are you sure you want to delete?')
		if (ans) {
			let product = this.cartItems.find(({product}) => product.id === productId)
			if (product) {
				product.quantity = 0
			}
		}

	}

	check() {
		this.voucherApplied = false
		vouchers.forEach(voucher => {
			if (voucher.name == this.voucherInput) {
				this.voucherDiscount = (this.totalPrice  * voucher.discount) / 100
				this.voucherApplied = true;
			}
		})
	}

	handleChange(productId: number, quantity: number) {
		if (quantity <= 0) {
			this.cartItems.forEach(({product}, index) => {
				if (product.id == productId) this.cartItems.splice(index, 1)
			})
		}
	}
	hideMessage(): void {
		this.voucherApplied = undefined
	}

}
