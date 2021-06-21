import { OrderItem } from './orderItem.model';
import { AddressModel as Address } from './address.model';

export class Order{
    public id: String = '';
    public placedAt: string;
    public price: number;
    public address: Address;
    public status: string;
    public orderItems: OrderItem[];
    public transaction: {price : number};
}