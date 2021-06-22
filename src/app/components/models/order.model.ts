import { OrderItem } from './orderItem.model';
import { AddressModel as Address } from './address.model';

export class Order{
    public orderId: String = '';
    public placedAt: string;
    public address: Address;
    public orderStatus: string;
    public orderItems: OrderItem[];
    public transactions: {price : number};
}