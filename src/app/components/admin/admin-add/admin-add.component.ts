import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Brand } from '../../models/brand.model';


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  productAdd: Product = new Product();
  brands: Brand[] = [];
  genders: string[] = ["male", "female"]
  speeds: string[] = ["slow", "slower", "fast", "faster"]
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit(): void {

    this.service.getAllBrands().then(brands => { this.brands = brands })
    console.log(this.productAdd);
  }

  add() {
    this.service.addProduct(this.productAdd);
    console.log(this.productAdd);
    this.router.navigate(['admin-list']);
   
  }
  assignfeatures(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.productAdd.features = value.split(",");
  }
}
