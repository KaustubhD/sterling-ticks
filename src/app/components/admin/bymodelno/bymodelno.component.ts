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
  model: string = '';
  alert: boolean = false;


  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
 
  }

  findByModelNo() {
  this.service.getByModel(this.model).then(data => {
     this.alert=data!=null?false:true;
      this.product = data;
  }
  ).catch(error => this.alert=false);
  
}


  remove(modelNo: string) {
    var answer = confirm('Are you sure to delete entry?');
    if (answer)
    this.service.delProduct(modelNo);
      // this.service.delProduct(modelNo);
      location.reload();
  }
  edit(model: string) {
    this.router.navigate((['admin-edit']), { queryParams: { model: model } }).then(() =>
      location.reload()
    );
  }

}
