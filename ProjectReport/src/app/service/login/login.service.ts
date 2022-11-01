import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor( private http:HttpClient) { }

  public authenticate(user:any){
    // console.log(user)
    return this.http.post(`${baseUrl}/authenticate`,user);
}


  
}
