import { Brand } from "./brand.model";
import { Collection } from "./collection.model";

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
    public starRating: number;
    public discount: number;
    public caseSize: number;
    public caseShape: string;
    public caseMaterial: string;
    public glassMaterial: string;
    public dialColor: string;
    public strapMaterial: string;
    public strapColor: string;
    public waterResistance: number;
    public warrantyPeriod: number;
    public features: string;
    public images: string[] = [];

	getDiscountedPrice(): number {
		return this.price - (this.price * this.discount / 100);
	}
	static build(fields: Partial<Product>): Product {
		return Object.assign(Product.prototype, fields)
	}
}