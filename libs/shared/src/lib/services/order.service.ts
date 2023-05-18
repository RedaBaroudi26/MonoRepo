import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = "http://localhost:5000/api/v1/orders"

  constructor(private http : HttpClient) { }

  getAllOrders(){
    return this.http.get<any>(this.apiUrl)
  }

  createOrder(newOrder : any){
    return this.http.post<any>(this.apiUrl,newOrder)
  }

  updateOrder( idOrder : string , order : Order){
    return this.http.post<any>(`${this.apiUrl}/${idOrder}`,order)
  }

  getOneOrder(idOrder:string|null){
    return this.http.get<any>(`${this.apiUrl}/${idOrder}`)
  }


}
