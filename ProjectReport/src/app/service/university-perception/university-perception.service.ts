import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class UniversityPerceptionService {

  constructor(private http:HttpClient) { }

  // /perception/add

  public addPersonal_Info(personalInfoObj:any){
    return this.http.post(`${helper.universityUrl}/perception/add`,personalInfoObj);
  }

}
