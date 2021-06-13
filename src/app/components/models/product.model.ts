export class Product{
    public id: number;
    public name: string;
    public price: number;
    public brand: string;
    public collection: string;
    public series: string;
    public modelno: string;
    public movement: string;
    public gender: string;
    public star_rating: number;
    public discount: number;
    public case: {
        size: number,
        shape: string,
        material: string
    }[];
    public glass_material: string;
    public dial_colour: string;
    public strap:{
        material: string,
        colour: string
    }[];
    public water_resistance: number;
    public warranty_period: number;
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