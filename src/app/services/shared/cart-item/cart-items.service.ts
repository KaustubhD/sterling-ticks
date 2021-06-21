import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import CartRequest from 'src/app/components/models/request/cartRequest.model';
import { URLS } from 'src/app/common/global-constants';
import { CartModel } from 'src/app/components/models/cart.model';

@Injectable({
	providedIn: 'root'
})
export class CartItemsService {

	private _totalCartItems: number = 0;
	constructor(private http: HttpClient) { }

	set totalCartItems(quantity: number) {
		this._totalCartItems = quantity
	}

	get totalCartItems(): number {
		return this._totalCartItems
	}

	updateQuantity(userName: string, productId: number, quantity: number): Promise<any> {
		const reqBody: CartRequest = {userName, productId, quantity}
		return this.http
			.post<Object>(URLS.UPDATE_CART, reqBody)
			.toPromise()
			.then((res: any) => {
				this.totalCartItems = res.cartItems
			})
	}

	getUserCart(userName: string): Promise<CartModel> {
		return this.http.get<CartModel>(URLS.CART(userName)).toPromise()
	}
}