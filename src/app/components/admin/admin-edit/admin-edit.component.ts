import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';
import { filter } from 'rxjs/operators';
import { Brand } from '../../models/brand.model';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  product : Product = new Product();
  brands: Brand[] = [];
  genders: string[] = ["Male", "Female"]
  constructor(private service : ProductService, private router: Router, private aroute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.aroute.queryParams.pipe(filter(params => params.id)).subscribe(params => { 
      var modelNo = params.modelNo;
      this.service.getByModel(modelNo).then(data => this.product = data);
    });
  }

  update(){
    this.service.editProduct(this.product);
    this.router.navigate(['admin-list']);
  }

  
  

}
