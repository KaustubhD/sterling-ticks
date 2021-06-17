import { Component, Input, OnInit } from '@angular/core';
import { vouchers } from 'src/app/common/vouchers';
import { LoginService } from 'src/app/services/login.service';
import { CartItemsService } from 'src/app/services/shared/cart-item/cart-items.service';
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

  constructor(private service:CartItemsService, private loginService:LoginService) {
    //this.service.getUserCart(loginService.)
  }

  ngOnInit(): void { }

  totalPrice : number=0;
  discountPrice :number=0;
  voucherInput : String;
  voucherDiscount : number=0;
  voucherApplied:boolean;

  getDiscountPrice(){
		this.cartItems.forEach((item, index) => {
      if(index == 0){
        this.discountPrice = 0;
      }
        if(item.quantity>=1){
          this.discountPrice += (item.price*item.discount*item.quantity/100);
        }
    }); 
    return this.discountPrice;
	}

  getTotalPrice(){
    this.totalPrice -= this.totalPrice ;
    this.cartItems.forEach(item => {
      if(item.quantity >= 1){
        this.totalPrice += (item.price*item.quantity);
      }
    });

    return this.totalPrice;
  }

  getTotalAmount(){
    return this.totalPrice - this.discountPrice;
    
  }

  removeItem(productId : number){
    var ans = confirm('Are you sure you want to delete?')
     if(ans){
      let product = this.cartItems.find((product) => product.id === productId) 
      if(product){
        product.quantity = 0
      }
     }
       
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


  check(){
    this.voucherApplied=false;  
    vouchers.forEach(voucher => {
      if(voucher.name==this.voucherInput){
          this.voucherDiscount=voucher.discount;
          this.voucherApplied=true;
     }
  });
    if(this.voucherApplied){
      console.log("voucher applied successfully");
    }
  }
   
  handleChange(productId: number, quantity: number){
    console.log(this.cartItems)
    
    if(quantity <= 0){
      this.cartItems.forEach((item,index)=>{
        if(item.id==productId) this.cartItems.splice(index,1);
     });
    }
    
  }

}
