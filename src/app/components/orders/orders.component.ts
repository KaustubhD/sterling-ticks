import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { LoginService } from 'src/app/services/login.service';
import { Product } from '../models/product.model';
import { AddressModel } from '../models/address.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[]= [];
  constructor(private service: OrderService, private router: Router, private authService: LoginService) { }

  ngOnInit(): void {
     this.authService.getAuthenticatedUser().subscribe(
       user =>{
         this.getOrders(user.userName);
       }
    );  
  }

  getOrders(username : string){
    this.service.getOrders(username).then(data =>{
      this.orders = data;
    });
  }

  specification(modelNo: string){
    this.router.navigate([`/product/${modelNo}`]);
  }

}
