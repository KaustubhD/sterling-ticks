import { Component, OnInit } from '@angular/core';
import { ProductListModel } from '../../models/productList.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bybrand',
  templateUrl: './bybrand.component.html',
  styleUrls: ['./bybrand.component.css']
})
export class BybrandComponent implements OnInit {
  products: ProductListModel[] = [];
  brands: string[] = ["Meistersinger", "Iwc", "Hublot", "Omega","Girard Pereguax","Rolex"];
  brand: string = '';

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  findByBrand(){
   this.service.getByBrand(this.brand).then(data => this.products = data)
  }
 
}
