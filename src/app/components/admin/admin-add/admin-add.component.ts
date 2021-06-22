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
  responses:Array<any>=new Array<any>();
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
  addImage(){
    if(this.responses.length!=0){
      this.responses.forEach(response=>{
        this.productAdd.images.push(response.data.secure_url);

      });
      console.log(this.productAdd.images);

      // this.productAdd.images=this.responses[this.responses.length-1].data.secure_url;
     
    }
  }
}
