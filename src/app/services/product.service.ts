import { Injectable } from '@angular/core';
import { ProductListModel } from '../components/models/productList.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants, URLS } from '../common/global-constants';
import { Brand } from '../components/models/brand.model';
import { Product } from 'src/app/components/models/product.model';
import { Collection } from '../components/models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url="";
  
  constructor(private http: HttpClient) { }

  async getAllProducts(){
    return await this.http.get<ProductListModel[]>(URLS.PRODUCT_LIST()).toPromise();
  }

  async getAllBrands() {
    return await this.http.get<Brand[]>(URLS.BRANDS).toPromise();  
  }

  async getAllCollections() {
    return await this.http.get<Collection[]>(URLS.COLLECTIONS).toPromise();  
  }

  async getByBrand(brand: string){
    return await this.http.get<ProductListModel[]>(URLS.PRODUCT_LIST(brand)).toPromise();
  }

  async getByCollection(category: string){
    return await this.http.get<ProductListModel[]>(URLS.PRODUCT_LIST(undefined, category)).toPromise();
  }
  
  getByModel(model: string): Promise<Product> {
	return this.http.get<Product>(URLS.GET_PRODUCT(model)).toPromise()
  }
  
  getSimilarProducts(model: string): Promise<Product[]> {
	return this.http.get<Product[]>(URLS.GET_SIMILAR_PRODUCTS(model)).toPromise()
  }
  
}
