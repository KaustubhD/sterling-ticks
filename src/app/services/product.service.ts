import { Injectable } from '@angular/core';
import { Product } from '../components/models/product.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { Brand } from '../components/models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url:string = GlobalConstants.apiUrl+'products/';
  constructor(private http: HttpClient) { }

  async getAllProducts(){
    return await this.http.get<Product[]>(this.url).toPromise();
  }

  async getAllBrands() {
    return await this.http.get<Brand[]>(this.url+'brands').toPromise();  
  }

  async getAllCategories() {
    return await this.http.get<string[]>(this.url+'categories').toPromise();  
  }

  async getByBrand(brand: string){
    return await this.http.get<Product[]>(this.url+'brand/'+brand).toPromise();
  }

  async getByCategory(category: string){
    return await this.http.get<Product[]>(this.url+'category/'+category).toPromise();
  }
  
}
