import { Product } from './product.model';

export class OrderItem{
    product: Product;
    boughtAtPrice: number;
    quantity: number;
}