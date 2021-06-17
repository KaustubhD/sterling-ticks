import { Injectable } from '@angular/core';
import { ProductListModel } from '../components/models/productList.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { Brand } from '../components/models/brand.model';
import { Product } from 'src/app/components/models/product.model';
import { Collection } from '../components/models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url="";
  URLS = GlobalConstants.URLS;
  constructor(private http: HttpClient) { }

  async getAllProducts(){
    return await this.http.get<ProductListModel[]>(this.URLS.PRODUCTS).toPromise();
  }

  async getAllBrands() {
    return await this.http.get<Brand[]>(this.URLS.BRANDS).toPromise();  
  }

  async getAllCollections() {
    return await this.http.get<Collection[]>(this.URLS.COLLECTIONS).toPromise();  
  }

  async getByBrand(brand: string){
    return await this.http.get<ProductListModel[]>("").toPromise();
  }

  async getByCollection(category: string){
    return await this.http.get<ProductListModel[]>("").toPromise();
  }
  
  getByModel(model: string): Promise<Product> {
	return this.http.get<Product>(GlobalConstants.URLS.GET_PRODUCT(model)).toPromise()
  }
  
  getSimilarProducts(model: string): Promise<Product[]> {
	return this.http.get<Product[]>(GlobalConstants.URLS.GET_SIMILAR_PRODUCTS(model)).toPromise()
  }
  
}
