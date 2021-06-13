import { Time } from "@angular/common";

  
export class Cart{
    public name: String = '';
    public brand: string= '' ;
    public rating: number = 0;
    public price: number = 999;
    public img: string = '';
    public quantity:number=0;
    public deliveryTime: Time ={minutes : 0,hours :0}
}