import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor( private http:HttpClient) { }

  public authenticate(university:any){
    return this.http.post(`${helper.universityUrl}/authenticate`,university);
  }

  public getUniversityNamesList(){
    return this.http.get(`${helper.universityUrl}/getListWithName`);
  }

  public getUniversityFromUid(Uid:number){
    return this.http.get(`${helper.universityUrl}/getUniversityById/`+Uid);
  }



}
