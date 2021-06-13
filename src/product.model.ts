export class Product{

    public id: number = 0;
    public name: string = '';
    public price: number = 0;
    public brand: string = '';
    public collection: string = '';
    public series: string = '';
    public modelno: string = '';
    public movement: string = '';
    public gender: string = '';
    public star_rating: number = 0.0;
    public discount: number = 0;
    public case:{
        size: number,
        shape: string,
        material: string
    }[];
    public glass_material: string = '';
    public dial_colour: string = '';
    public strap:{
        material: string,
        colour: string
    }[];
    public water_resistance: number = 0;
    public warranty_period: number = 0;
    public features: string = '';
    public img: string[] = [];

}