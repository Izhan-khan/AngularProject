import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor( private http:HttpClient) { }

  public authenticate(university:any){
    // console.log(user)
    return this.http.post(`${baseUrl}/university/authenticate`,university);
  }

  public getUniversityNamesList(){
    // console.log(user)
    return this.http.get(`${baseUrl}/university/getListWithName`);
  }


}
