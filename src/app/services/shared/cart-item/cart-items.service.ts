import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

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

	updateQuantity(productId: number, quantity: number): void {
		console.log(`Update cart\nProduct: ${productId}, quantity: ${quantity}`)
		this.http
			.post<Object>("update cart path", {productId, quantity})
			.toPromise()
			.then((res: any) => {
				this.totalCartItems = res.cartItemsCount
			})
	}
}