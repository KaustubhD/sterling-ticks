import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[]= [{
    no: '1',
    date: '2021-07-03',
    price: 5000,
    deliveryAddress: 'Gokul',
    items: [{
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    }]
  },{
    no: '1',
    date: '2021-07-03',
    price: 5000,
    deliveryAddress: 'Gokul',
    items: [{
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    }]
  },{
    no: '1',
    date: '2021-07-03',
    price: 5000,
    deliveryAddress: 'Gokul',
    items: [{
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    },
    {
      modelNo: '76', name: 'Item_name',
      price: 200,
      qty: 4
    }]
  }];
  constructor(private service: OrderService, private router: Router, private authService: LoginService) { }

  ngOnInit(): void {
    // this.authService.getAuthenticatedUser().subscribe(
    //   user =>{
    //     this.getOrders(user.userName);
    //   }
    // );  
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
