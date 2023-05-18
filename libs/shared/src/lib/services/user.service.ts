import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResLogin, ResOneUser, ResUser, User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:5000/api/v1/users" ;
  
  user : User = {
    name: '',
    email: '',
    adress: '',
    city: '',
    country: '',
    phone: '',
    isAdmin: false
  } ; 

  constructor(private http : HttpClient) { }

  login( email : string , password : string ):Observable<ResLogin>{
    return this.http.post<ResLogin>(`${this.apiUrl}/login`,{email,password})
  }

  getAllUsers() : Observable<ResUser>{
    return this.http.get<ResUser>(this.apiUrl) ;
  }

  addUser( newUser : User ) : Observable<ResOneUser>{
    return this.http.post<ResOneUser>(`${this.apiUrl}/register` , newUser) ;
  }

  deleteUser(idUser:string){
    return this.http.delete<any>(`${this.apiUrl}/${idUser}`) ;
  }
  
}
