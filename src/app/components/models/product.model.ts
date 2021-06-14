export class Product{
    public id: number;
    public name: string;
    public price: number;
    public brand: string;
    public collection: string;
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
    public dialColour: string;
    public strapMaterial: string;
    public strapColour: string;
    public waterResistance: number;
    public warrantyPeriod: number;
    public features: string;
    public img: string[] = [];

	getDiscountedPrice(): number {
		console.log("Price:" + this.price)
		return this.price - (this.price * this.discount / 100);
	}
	static build(fields: Partial<Product>): Product {
		return Object.assign(Product.prototype, fields)
	}
}