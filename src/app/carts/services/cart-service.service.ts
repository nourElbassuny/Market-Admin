import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }
 getAllCarts(param?:any){
  let params=new HttpParams();
  params=params.append("startDate",param?.start).append("endDate",param?.end)
  return this.http.get('https://fakestoreapi.com/carts',{params});
 }
 
}
