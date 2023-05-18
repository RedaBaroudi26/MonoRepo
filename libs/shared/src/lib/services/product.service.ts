import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ResOneProduct, ResProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:5000/api/v1/products";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ResProduct> {
    return this.http.get<ResProduct>(this.apiUrl);
  }

  getOneProduct(id: string): Observable<ResOneProduct>{
    return this.http.get<ResOneProduct>(`${this.apiUrl}/${id}`)
  }

  persistProduct(data: any): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, data);
  }

  putProduct(id: string , data:any): Observable<ResProduct>{
    return this.http.put<ResProduct>(`${this.apiUrl}/${id}`, data)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }


}
