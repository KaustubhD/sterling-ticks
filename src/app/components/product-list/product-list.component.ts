import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      "name" : "Product 1",
      "price" : 500,
      "rating": 5,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name" : "Product 2",
      "price" : 800,
      "rating": 5,
      "brand": "Helio",
      "img": ""
    },
    {
      "name" : "Product 2",
      "price" : 800,
      "rating": 5,
      "brand": "Helio",
      "img": ""
    },
    {
      "name" : "Product 2",
      "price" : 800,
      "rating": 5,
      "brand": "Helio",
      "img": ""
    },
    {
      "name" : "Product 2",
      "price" : 800,
      "rating": 5,
      "brand": "Helio",
      "img": ""
    },
    {
      "name" : "Product 2",
      "price" : 800,
      "rating": 5,
      "brand": "Helio",
      "img": ""
    },
    {
      "name" : "Product 2",
      "price" : 800,
      "rating": 5,
      "brand": "Helio",
      "img": ""
    },
    {
      "name" : "Product 2",
      "price" : 800,
      "rating": 5,
      "brand": "Helio",
      "img": ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    console.log("Fetching Products");
  }
}
