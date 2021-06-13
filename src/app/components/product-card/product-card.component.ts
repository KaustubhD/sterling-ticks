import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product : Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  specification(){
    this.router.navigate(['/home'],{queryParams : { product: this.product.name}});
  }
}
