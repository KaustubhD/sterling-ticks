import { Time } from "@angular/common";
import { Product } from "./product.model";

export class CartModel {
	public userName: string;
	public orderItems: CartItemModel[];
}

export class CartItemModel {
	public product: Product;
	public quantity: number;
}