import { Time } from "@angular/common";
import { Product } from "./product.model";

export class CartModel {
	public userName: string;
	public orderItems: CartItemModel[];
	public voucherDiscount: number;
}

export class CartItemModel {
	public product: Product;
	public quantity: number;
}