import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Time } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Brand } from '../models/brand.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  page: number = 1;
  maxItem: number = 12;
  brandSelect: boolean = false;
  products: Product[] = [
    {
      "name": "Product 1",
      "price": 500,
      "rating": 1,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 2",
      "price": 120,
      "rating": 2,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 3",
      "price": 6078,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 4",
      "price": 973,
      "rating": 5,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 5",
      "price": 800,
      "rating": 5,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 6",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 7",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 8",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 9",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    }, {
      "name": "Product 10",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 11",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 12",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 13",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    }, {
      "name": "Product 14",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 15",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "name": "Product 16",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    }
  ];
  brands: Brand[] = [{name: "helio",description: "Premium watch brand. Estd. 1980, London"},{name: "Titan",description: ""},{name: "Breguet",description: ""}];
  categories: string[] = ["Rich", "Expensive","Sell Kidneys"];
  lastPage: number;
  aBrand: Brand;
  constructor(private service: ProductService, private router: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aroute.queryParams.subscribe(params => {
      if(params.filterBy!=null){
        this.filter();
      }
      else{
        this.brandSelect=false;
        this.getAllProducts();
      }
      if(params.sortBy!=null){
        this.sort();
      }
    });
    this.getAllBrands();
    this.getAllCategories();
    this.lastPage = this.products.length / this.maxItem;
  }

  getAllBrands(){
    this.service.getAllBrands().then((data) => this.brands = data);
  }

  getAllCategories(){
    this.service.getAllCategories().then((data) => this.categories = data);
  }

  sort() {
    this.aroute.queryParams.subscribe(params => {
      if (params.sortBy == 'price') {
        this.priceSort();
      }
      if (params.sortBy == 'rating') {
        this.ratingSort();
      }
    });
  }

  filter(){
    this.aroute.queryParams.subscribe(params => {
      if (params.filterBy == 'brand') {
        this.filterByBrand(params.brand);
      }
      if (params.filterBy == 'category') {
        this.brandSelect=false;
        this.filterByCategory(params.category);
      }
    });
  }

  getAllProducts() {
    this.service.getAllProducts().then((data) => this.products = data);
  }

  next() {
    if (this.page < this.lastPage)
      console.log("next page");
    this.page = this.page + 1;
  }
  prev() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }

  filterByBrand(brand: string) {
    this.brandSelect=true;
    let res = this.service.getByBrand(brand).then(
      data => {
        data = this.products;
      });
    this.brands.forEach(el => {
      if(el.name==brand){
        this.aBrand = el;
      }
    });
  }

  filterByCategory(category: string) {
    let res = this.service.getByCategory(category).then(
  data => this.products = data);
  }

  priceSort() {
    this.products.sort((a: Product, b: Product) => (a.price > b.price ? 1 : -1));
    console.log(this.products);
  }

  ratingSort() {
    this.products.sort((a: Product, b: Product) => (a.rating > b.rating) ? -1 : 1);
  }

}
