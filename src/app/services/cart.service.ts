import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  removeItem(index : number){
    this.http.delete(GlobalConstants.URLS.CART+"/"+index).subscribe();
  }
}
