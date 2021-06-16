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
  
  url:string = GlobalConstants.apiUrl+'products/';
  constructor(private http: HttpClient) { }

  async getAllProducts(){
    return await this.http.get<ProductListModel[]>(this.url).toPromise();
  }
  
  async getAllBrands() {
    return await this.http.get<Brand[]>(GlobalConstants.URLS.BRAND).toPromise();  
  }

  async getAllCollections() {
    return await this.http.get<Collection[]>(this.url+'categories').toPromise();  
  }

  async getByBrand(brand: string){
    return await this.http.get<ProductListModel[]>(this.url+'brand/'+brand).toPromise();
  }

  async getByCollection(category: string){
    return await this.http.get<ProductListModel[]>(this.url+'category/'+category).toPromise();
  }
  
  getByModel(model: String): Promise<Product> {
	return this.http.get<Product>(`${this.url}model/${model}`).toPromise()
  }
  addProduct(product: Product){
    console.log("add");
   this.http.post(GlobalConstants.URLS.ADD_PRODUCT,product).subscribe(data => data = product);
  }
  editProduct(product : Product) {
    console.log("update :"+ product);
    this.http.put(GlobalConstants.URLS.EDIT_PRODUCT,product).subscribe(data => data = product);
  }
  delProduct(modelNo: string){
    return this.http.delete(GlobalConstants.URLS.DELETE_PRODUCT(modelNo)).subscribe();
  }
}
