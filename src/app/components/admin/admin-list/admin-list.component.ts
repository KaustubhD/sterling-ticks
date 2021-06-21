import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';
import { ProductListModel } from '../../models/productList.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  products: ProductListModel[] = [];
  logged: boolean = false;

  constructor(private service: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.updateProducts();
    this.service.getAllProducts().then((data) => {
      this.products = data;
      console.log(this.products)
    });
  }
  updateProducts() {
    this.service.getAllProducts().then((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  remove(modelNo: string) {

    var answer = confirm('Are you sure to delete entry?');
    if (answer)
      this.service.delProduct(modelNo);
    setTimeout(() => {
      this.updateProducts();
    }, 600)


  }
  orderByName() {
    this.products.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0));
  }
  orderByBrand() {
    this.products.sort((a, b) => (a.brandName > b.brandName) ? 1 : ((a.brandName < b.brandName) ? -1 : 0));
  }
  orderByPrice() {
    this.products.sort((a, b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0));
  }

  edit(model: string) {
    this.router.navigate(['admin-edit', model]).then(() =>
    location.reload()
    );
  }
  test(p: Product) {
    console.log(p);
  }


}
