import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartModel } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartModel[]=[
    {
      "id":234,
      "name": "Breitling Navitimer",
      "price": 50000,
      "rating":4,
      "brand":"Breitling",
      "glassMaterial":"Sapphire Crystal",
      "img" : "watch.webp",
      "quantity":2,
      "gender":"Women",
      "color":"Red",
      "discount":10,
      "deliveryTime":{minutes:40,hours:4}
    },
    {
      "id":456,
      "name": "Breitling Navitimer",
      "price": 50000,
      "rating":4,
      "brand":"Breitling",
      "glassMaterial":"Sapphire Crystal",
      "img" : "watch.webp",
      "quantity":2,
      "gender":"Women",
      "color":"Red",
      "discount":10,
      "deliveryTime":{minutes:40,hours:4}
    },
    {
      "id":57,
      "name": "Breitling Navitimer",
      "price": 47000,
      "rating":5,
      "brand":"Breitling",
      "glassMaterial":"Sapphire Crystal",
      "img" : "watch.webp",
      "quantity":2,
      "gender":"Women",
      "color":"Red",
      "discount":20,
      "deliveryTime":{minutes:40,hours:4}
    }

  ];
   totalPrice : number=0;
   discountPrice :number=0;
  //  product:CartModel=new Cart();
  getDiscountPrice(){
		// console.log("Price:" + this.cartItems.price)
		this.cartItems.forEach(item => {
        if(item.quantity<=0){
       this.discountPrice += (item.price * item.discount / 100); 
        }
        else{
          this.discountPrice += (item.price*item.discount*item.quantity/100);
        }
    }); 
    return this.discountPrice;
	}

  getTotalPrice(){
    this.cartItems.forEach(item => {
      this.totalPrice += item.price;
    });

    return this.totalPrice;
  }

  getTotalAmount(){
    return this.totalPrice - this.discountPrice;
    
  }

  removeItem(index : number){
    var ans = confirm('Are you sure you want to delete?')
     if(ans)
       this.service.removeItem(index)
  }

//   selectedProduct : CartModel = new CartModel();
//   addQuantity(id : number){
//      this.selectedProduct = this.cartItems.find(product => product.id === id) as CartModel;
//     this.selectedProduct.quantity+=1;
//   }

//   subtractQuantity(id : number){
//     this.selectedProduct = this.cartItems.find(product => product.id === id) as CartModel;
//     this.selectedProduct.quantity<1?0:this.selectedProduct.quantity-=1;
//  }



  
  
  constructor(private service:CartService) { }

  ngOnInit(): void {

    
  }

  

}
