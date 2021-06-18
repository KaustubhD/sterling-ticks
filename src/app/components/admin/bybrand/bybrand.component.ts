// import { Component, OnInit } from '@angular/core';
// import { Product } from '../../models/product.model';
// import { ProductService } from 'src/app/services/product.service';
// import { Router } from '@angular/router';
// import { Brand } from '../../models/brand.model';

// @Component({
//   selector: 'app-bybrand',
//   templateUrl: './bybrand.component.html',
//   styleUrls: ['./bybrand.component.css']
// })
// export class BybrandComponent implements OnInit {
//   product: Product[] =new Product();
//   brands: Brand[] = [];
//   brand:string='';
//   constructor(private service:ProductService, private router: Router) { }

//   ngOnInit(): void {
//   }
//   findByBrand(){
//     this.service.getByBrand(this.brand).then(data => this.product = data)
//    }
// }
