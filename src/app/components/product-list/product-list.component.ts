import { Component, OnInit } from '@angular/core';
import { ProductListModel } from '../models/productList.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Brand } from '../models/brand.model';
import { Collection } from '../models/collection.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  page: number = 1;
  maxItem: number = 12;
  brandSelect: boolean = false;
  products: ProductListModel[] = [];
  brands: Brand[] = [];
  collections: Collection[] = [];
  lastPage: number = 1;
  aBrand: Brand;
  constructor(private service: ProductService, private router: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllCollections();
    this.brandSelect = false;
    let brand: string | undefined;
    let collection: string | undefined;
    this.aroute.queryParams.subscribe(params => {
      if (params.filterBy == 'brand') {
        brand = params.brand;
        setTimeout(() => {
        this.brandSelect = true;
          this.brands.forEach(el => {
            if (el.name == params.brand) {
              this.aBrand = el;
            }
          }, 400);
        });
      }
      else {
        brand = undefined;
        this.brandSelect = false;
      } 
      collection = (params.filterBy == 'collection') ? params.collection : undefined;

      this.service.getProductList(brand, collection).then(data => {
        this.products = data;
        if (params.sortBy != null) {
          this.sort();
        }
        this.lastPage = this.products.length as number / this.maxItem;
      });
    });
  }

  sortSearch(sortBy: string) {

  }
  getAllBrands() {
    this.service.getAllBrands().then((data) => this.brands = data);
  }

  getAllCollections() {
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
   next() {
    if (this.page < this.lastPage)
      this.page = this.page + 1;
  }
  prev() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }

  priceSort() {
    this.products.sort((a: ProductListModel, b: ProductListModel) => (a.price > b.price ? 1 : -1));
  }

  ratingSort() {
    this.products.sort((a: ProductListModel, b: ProductListModel) => (a.starRating > b.starRating) ? -1 : 1);
  }

}