import { Time } from "@angular/common";

export class Cart{
    public name: String = '';
    public brand: String= '' ;
    public rating: number = 0;
    public price: number = 999;
    public img: String = '';
    public quantity:number=0;
    public deliveryTime: Time ={minutes : 40,hours :3};
    public glassMaterial:String ="";
    public gender:String ="";
    public color:String="";
}