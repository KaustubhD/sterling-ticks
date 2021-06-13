import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts:Cart[]=[
    {
      "name": "Product 1",
      "price": 5000,
      "rating":4,
      "brand":"Helio",
      "img" : "watch.webp",
      "quantity":2,
      "deliveryTime":{minutes:40,hours:4}
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
