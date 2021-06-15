import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemsService } from 'src/app/services/shared/cart-item/cart-items.service';

@Component({
	selector: 'app-cart-quantity',
	templateUrl: './cart-quantity.component.html',
	styleUrls: ['./cart-quantity.component.css']
})
export class CartQuantityComponent implements OnInit {

	@Input() quantity: number
	@Input() productId: number
	@Output() quantityChange = new EventEmitter<number>()

	quantity$: BehaviorSubject<number>

	constructor(private cartItemsService: CartItemsService) {}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges){
		if(changes.quantity.isFirstChange())
			this.subscribe()
	}

	ngOnDestroy(): void {
		this.quantity$.unsubscribe()
	}

	subscribe(): void {
		this.quantity$= new BehaviorSubject(this.quantity)
		this.quantity$
			.subscribe((newQuantity) => {
				this.quantity = newQuantity
				this.quantityChange.emit(this.quantity)
				// this.cartItemsService.updateQuantity(this.productId, this.quantity)
			})
	}

	addQuantity() {
		this.quantity$.next(this.quantity + 1)
	}
	subtractQuantity() {
		this.quantity$.next(this.quantity - 1 < 0 ? 0 : this.quantity - 1)
	}
}