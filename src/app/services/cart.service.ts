import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants, URLS } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  removeItem(index : number){
    this.http.delete(URLS.CART+"/"+index).subscribe();
  }
}
