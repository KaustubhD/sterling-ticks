import { Brand } from "./brand.model";
import { Collection } from "./collection.model";
import { Casing } from './casing.model';
import { Strap } from './strap.model';

export class Product{
    public id: number;
    public name: string;
    public price: number;
    public brand: Brand;
    public collection: Collection;
    public series: string;
    public modelNo: string;
    public movement: string;
    public gender: string;
    public deliverySpeed: string;
    public starRating: number;
    public discount: number;
    public casing: Casing;
    public glassMaterial: string;
    public dialColor: string;
    public strap: Strap;
    public waterResistance: number;
    public warrantyPeriod: number;
    public features: string[]=[];
    public images: string[] = [];
    constructor(){
    this.brand=new Brand();
    this.collection=new Collection();
    this.casing= new Casing();
    this.strap=new Strap();
  }
	getDiscountedPrice(): number {
		return this.price - (this.price * this.discount / 100);
	}
	static build(fields: Partial<Product>): Product {
		return Object.assign(new Product(), fields)
	}
}