import { Component, OnInit, Input } from '@angular/core';
import { ProductListModel } from '../models/productList.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product : ProductListModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  specification(){
    this.router.navigate([`/product/${this.product.modelNo}`]);
  }
}
