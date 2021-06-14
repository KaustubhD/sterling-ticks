import { Component, OnInit } from '@angular/core';
import { ProductListModel } from '../models/productList.model';
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
  products: ProductListModel[] =  [
    {
      "modelNo" : "mdl001",
      "name": "Product 1",
      "price": 500,
      "rating": 1.5,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 2",
      "price": 120,
      "rating": 2.8,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 3",
      "price": 6078,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 4",
      "price": 973,
      "rating": 5,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 5",
      "price": 800,
      "rating": 5,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 6",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 7",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 8",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 9",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    }, {
      "modelNo" : "mdl001", "name": "Product 10",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 11",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 12",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 13",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    }, {
      "modelNo" : "mdl001", "name": "Product 14",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },
    {
      "modelNo" : "mdl001", "name": "Product 15",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    },

    {
      "modelNo" : "mdl001", "name": "Product 16",
      "price": 800,
      "rating": 4,
      "brand": "Helio",
      "img": "testimg.webp"
    }
  ];
  brands: Brand[] = [{name: "helio",description: "Premium watch brand. Estd. 1980, London"},{name: "Titan",description: ""},{name: "Breguet",description: ""}];
  collections: string[] = ["Rich","Expensive","Zubair likes"];
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
    this.getAllCollections();
    this.lastPage = this.products.length / this.maxItem;
  }

  getAllBrands(){
    this.service.getAllBrands().then((data) => this.brands = data);
  }

  getAllCollections(){
    this.service.getAllCollections().then((data) => this.collections = data);
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
      if (params.filterBy == 'collection') {
        this.brandSelect=false;
        this.filterByCollection(params.collection);
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

  filterByCollection(collection: string) {
    let res = this.service.getByCollection(collection).then(
  data => this.products = data);
  }

  priceSort() {
    this.products.sort((a: ProductListModel, b: ProductListModel) => (a.price > b.price ? 1 : -1));
    console.log(this.products);
  }

  ratingSort() {
    this.products.sort((a: ProductListModel, b: ProductListModel) => (a.rating > b.rating) ? -1 : 1);
  }

}
