import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, ResCategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "http://localhost:5000/api/v1/categories"

  constructor( private http : HttpClient ) { }

  getAllCategories() : Observable<ResCategory>{
    return this.http.get<ResCategory>(this.apiUrl) ;
  }

  getOneCategory( idCategory : string ) : Observable<ResCategory> {
    return this.http.get<ResCategory>(`${this.apiUrl}/${idCategory}`) ;
  }

  createCategory( newCategory : Category ) :  Observable<ResCategory>{
    return this.http.post<ResCategory>( this.apiUrl , newCategory ) ;
  }

  updateCategory( idCategory : string , category : Category | null ) : Observable<ResCategory>{
    return this.http.put<ResCategory>( `${this.apiUrl}/${idCategory}` , category ) ;
  }

  deleteCategory( idCategory : string ) : Observable<ResCategory>{
    return this.http.delete<ResCategory>( `${this.apiUrl}/${idCategory}` ) ;
  }

}
