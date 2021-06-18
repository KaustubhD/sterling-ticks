import { Brand } from './brand.model';

export class ProductListModel{
    public name: String = '';
    public modelNo: string;
    public brandName: string;
    public collectionName: string;
    public starRating: number = 0;
    public price: number = 999;
    public images: string[] = [];
}