import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Brand } from '../../models/brand.model';
import { GENDERS, SPEEDS } from 'src/app/common/app.constants';


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  productAdd: Product = new Product();
  brands: Brand[] = [];
  genders = GENDERS
  speeds = SPEEDS
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit(): void {

    this.service.getAllBrands().then(brands => { this.brands = brands })
  }

  add() {
    this.service.addProduct(this.productAdd).then(()=>{
      this.router.navigate(['admin-list']);
    });
    
   
  }
  assignfeatures(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.productAdd.features = value.split(",");
  }
}
