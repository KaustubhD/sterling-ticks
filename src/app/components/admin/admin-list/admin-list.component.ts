import { Component, OnInit } from '@angular/core';
import { ProductListModel } from '../../models/productList.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  products: ProductListModel[] = [    {
    "modelNo" : "mdl001", "name": "Product 2",
    "price": 120,
    "starRating": 2.5,
    "brand": {name:"Helio",shortDesc:"",imageUrl:""},
    "images": ["testimg.webp"]}];
  logged: boolean = false;

  constructor(private service: ProductService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.service.getAllProducts().then((data) => this.products = data);
  }

  remove(modelNo:string ){
    var answer = confirm('Are you sure to delete entry?');
    if(answer)
      this.service.delProduct(modelNo);
  }
  orderByName(){
    this.products.sort((a,b)=> (a.name>b.name)? 1 : ((a.name<b.name)? -1: 0));
  }
  orderByBrand(){
    this.products.sort((a,b)=> (a.brand>b.brand)? 1 : ((a.brand<b.brand)? -1: 0));
  }
  orderByPrice(){
    this.products.sort((a,b)=> (a.price>b.price)? 1 : ((a.price<b.price)? -1: 0));
  }

  edit(modelNo : string){
    this.router.navigate((['admin-edit']),{queryParams : { modelNo: modelNo }}).then(()=>
      
      location.reload()
    );
  }
  
  

}
