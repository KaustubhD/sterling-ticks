import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bymodelno',
  templateUrl: './bymodelno.component.html',
  styleUrls: ['./bymodelno.component.css']
})
export class BymodelnoComponent implements OnInit {
  product: Product = new Product()
  model: string='';
  

  constructor(private service:ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  findByModelNo(){
    this.service.getByModel(this.model).then(data => this.product =data);
  }
  remove(modelNo:string ){
    var answer = confirm('Are you sure to delete entry?');
    if(answer)
      this.service.delProduct(modelNo);
  }
  edit(modelNo : string){
    this.router.navigate((['admin-edit']),{queryParams : { modelNo: modelNo }}).then(()=>
      
      location.reload()
    );
  }   
}
