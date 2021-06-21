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
  orders: Order[]= [
    {id: '8772',
     placedAt: '21-07-05',
     address: {
       id: 6,
       userName: 'User',
       phoneNo: 98,
       type: 'Home',
       defaultType: 'Home',
       address: '221B, Baker Street',
       city: 'London',
       state: 'Ohio',
       country: 'Africa',
       pincode: 7811009,
     },
     status: 'Delivered',
     transaction: {price: 5000},
     orderItems:  [{product: new Product(), boughtAtPrice: 200, quantity: 5},
      {product:
        {
       "id": 8,
       deliverySpeed: 'Faster',
       getDiscountedPrice: ()=> 6,
       "name": "Bridges",
       "price": 23673600,
       "series": "Cosmos",
       "modelNo": "99292-21-651-BA6F",
       "movement": "Manual Winding",
       "gender": "male",
       "starRating": 3.5,
       "discount": 8,
       "strap": {
           "color": "Blue",
           "material": "Leather"
       },
       "casing": {
           "color": "Rose Gold",
           "shape": "Round",
           "size": 47,
           material: ''
       },
       "glassMaterial": "Sapphire Crystal",
       "dialColor": "Skeleton",
       "waterResistance": 30,
       "warrantyPeriod": 2,
       "features": [
           "Tourbillon",
           "Zodiac Constellations Indicator",
           "Day Night Indicator"
       ],
       "images": [
           "assets/images/girard-perregaux-bridges-99292-21-651-ba6f-multipple-4.webp",
           " assets/images/girard-perregaux-bridges-99292-21-651-ba6f-large_2.webp",
           " assets/images/girard-perregaux-bridges-99292-21-651-ba6f-multiple-1.webp"
       ],
       "brand": {
           "name": "Girard-Perregaux",
           "imageUrl": "assets/Girard-Perregaux",
           "shortDesc": "Girard-Perregaux short desc",
       },
       "collection": {
           "name": "Bridges"
       }
   }, boughtAtPrice: 200, quantity: 5    },
      {product:
         {
        "id": 8,
        deliverySpeed: 'Faster',
        getDiscountedPrice: ()=> 6,
        "name": "Bridges",
        "price": 23673600,
        "series": "Cosmos",
        "modelNo": "99292-21-651-BA6F",
        "movement": "Manual Winding",
        "gender": "male",
        "starRating": 3.5,
        "discount": 8,
        "strap": {
            "color": "Blue",
            "material": "Leather"
        },
        "casing": {
            "color": "Rose Gold",
            "shape": "Round",
            "size": 47,
            material: ''
        },
        "glassMaterial": "Sapphire Crystal",
        "dialColor": "Skeleton",
        "waterResistance": 30,
        "warrantyPeriod": 2,
        "features": [
            "Tourbillon",
            "Zodiac Constellations Indicator",
            "Day Night Indicator"
        ],
        "images": [
            "assets/images/girard-perregaux-bridges-99292-21-651-ba6f-multipple-4.webp",
            " assets/images/girard-perregaux-bridges-99292-21-651-ba6f-large_2.webp",
            " assets/images/girard-perregaux-bridges-99292-21-651-ba6f-multiple-1.webp"
        ],
        "brand": {
            "name": "Girard-Perregaux",
            "imageUrl": "assets/Girard-Perregaux",
            "shortDesc": "Girard-Perregaux short desc",
        },
        "collection": {
            "name": "Bridges"
        }
    }, boughtAtPrice: 200, quantity: 5    }]},
      {id: '8772',
      placedAt: '21-07-05',
      address: {
        id: 6,
        userName: 'User',
        phoneNo: 98,
        type: 'Home',
        defaultType: 'Home',
        address: '221B, Baker Street',
        city: 'London',
        state: 'Ohio',
        country: 'Africa',
        pincode: 7811009,
      },
      status: 'Placed',
      transaction: {price: 5000},
      orderItems:  [{product: new Product(), boughtAtPrice: 200, quantity: 5},
       {product: new Product(), boughtAtPrice: 200, quantity: 5    },
       {product: new Product(), boughtAtPrice: 200, quantity: 5    }]},
       {id: '8772',
       placedAt: '21-07-05',
       address: {
         id: 6,
         userName: 'User',
         phoneNo: 98,
         type: 'Home',
         defaultType: 'Home',
         address: '221B, Baker Street',
         city: 'London',
         state: 'Ohio',
         country: 'Africa',
         pincode: 7811009,
       },
       status: 'in_cart',
       transaction: {price: 5000},
       orderItems:  [{product: new Product(), boughtAtPrice: 200, quantity: 5},
        {product: new Product(), boughtAtPrice: 200, quantity: 5    },
        {product: new Product(), boughtAtPrice: 200, quantity: 5    }]},
        {id: '8772',
        placedAt: '21-07-05',
        address: {
          id: 6,
          userName: 'User',
          phoneNo: 98,
          type: 'Home',
          defaultType: 'Home',
          address: '221B, Baker Street',
          city: 'London',
          state: 'Ohio',
          country: 'Africa',
          pincode: 7811009,
        },
        status: 'in_transit',
        transaction: {price: 5000},
        orderItems:  [{product: new Product(), boughtAtPrice: 200, quantity: 5},
         {product: new Product(), boughtAtPrice: 200, quantity: 5    },
         {product: new Product(), boughtAtPrice: 200, quantity: 5    }]}
  ];
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
