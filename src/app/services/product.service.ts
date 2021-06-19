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
  
<<<<<<< HEAD
  url:string = GlobalConstants.apiUrl+'/products/';
=======
 
>>>>>>> d7ed6862e98164b7902ec229172c2aec0112ae9b
  constructor(private http: HttpClient) { }

   getAllProducts(){
    return  this.http.get<ProductListModel[]>(URLS.PRODUCT_LIST()).toPromise();
  }
<<<<<<< HEAD
  
  async getAllBrands() {
    return await this.http.get<Brand[]>(GlobalConstants.URLS.BRAND).toPromise();  
=======

   getAllBrands() {
    return  this.http.get<Brand[]>(URLS.BRANDS).toPromise();  
>>>>>>> d7ed6862e98164b7902ec229172c2aec0112ae9b
  }

   getAllCollections() {
    return  this.http.get<Collection[]>(URLS.COLLECTIONS).toPromise();  
  }

   getByBrand(brand: string){
    return  this.http.get<ProductListModel[]>(URLS.PRODUCT_LIST(brand)).toPromise();
  }

   getByCollection(category: string){
    return  this.http.get<ProductListModel[]>(URLS.PRODUCT_LIST(undefined, category)).toPromise();
  }
   getProductList(brand: string|undefined, category: string|undefined){
    return  this.http.get<ProductListModel[]>(URLS.PRODUCT_LIST(brand, category)).toPromise();
  }
  
  getByModel(model: string): Promise<Product> {
	return this.http.get<Product>(URLS.GET_PRODUCT(model)).toPromise()
  }
  
  getSimilarProducts(model: string): Promise<Product[]> {
	return this.http.get<Product[]>(URLS.GET_SIMILAR_PRODUCTS(model)).toPromise()
  }
  addProduct(product: Product){
    console.log("add");
   this.http.post(GlobalConstants.URLS.ADD_PRODUCT,product).subscribe(data => data = product);
  }
  editProduct(product : Product) {
    console.log( product);
     this.http.put(GlobalConstants.URLS.EDIT_PRODUCT,product).subscribe(data => data = product);
   }

   
  delProduct(modelNo: string){
    return this.http.delete(GlobalConstants.URLS.DELETE_PRODUCT(modelNo)).subscribe();
  }
}
