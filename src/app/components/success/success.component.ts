import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  order: Order = new Order();
  user: UserModel = new UserModel();
  latestOrderIndex: number;
  constructor(private service: OrderService, private authService: LoginService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
			this.user = user ;
    });
    this.service.getOrders(this.user.userName).then(data =>{
      this.order = data[data.length - 1];
    });

  }

}
