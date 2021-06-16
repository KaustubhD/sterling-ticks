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
  product:Product = new Product();
  brands: Brand[] = [];
  genders: string[] = ["Male", "Female"]
  constructor( private router:Router,private service:ProductService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')==null){
      this.router.navigate(['admin-login']);
    }
  }

  add(){
console.log(this.product);
this.service.addProduct(this.product);
this.router.navigate(['admin-list']);
  }
 
  

}
