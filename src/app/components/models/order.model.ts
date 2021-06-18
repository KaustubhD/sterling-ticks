import { OrderItem } from './orderItem.model';

export class Order{
    public no: String = '';
    public date: string;
    public price: number;
    public deliveryAddress: number = 0;
    public items: OrderItem[];
}