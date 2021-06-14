import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:Cart[]=[
    {
      "name": "Breitling Navitimer",
      "price": 50000,
      "rating":4,
      "brand":"Breitling",
      "glassMaterial":"Sapphire Crystal",
      "img" : "watch.webp",
      "quantity":2,
      "gender":"Women",
      "color":"Red",
      "deliveryTime":{minutes:40,hours:4}
    },
    {
      "name": "Breitling Navitimer",
      "price": 47000,
      "rating":5,
      "brand":"Breitling",
      "glassMaterial":"Sapphire Crystal",
      "img" : "watch.webp",
      "quantity":2,
      "gender":"Women",
      "color":"Red",
      "deliveryTime":{minutes:40,hours:4}
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  

}
