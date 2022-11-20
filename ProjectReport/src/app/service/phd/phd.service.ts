import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class PhdService {

  constructor(private http:HttpClient) { }

  public getProgramById(id:number){
    return this.http.get(`${baseUrl}/programTime/getNameFromId/`+id);;
  }

  public getPhdGraduatedStudentsList(){
    return this.http.get(`${baseUrl}/phdGraduated/getList`);;
  }

  public getPhdPersuingStudentsList(){
    return this.http.get(`${baseUrl}/phdPersuing/getList`);;
  }

  public addPhdGraduatedStudentsList(PhdGraduatedStudentsList:any){
    return this.http.post(`${baseUrl}/phdGraduated/addList`,PhdGraduatedStudentsList);;
  }

  public addPhdPersuingStudentsList(PhdPersuingStudentsList:any){
    console.error(PhdPersuingStudentsList);
    return this.http.post(`${baseUrl}/phdPersuing/addList`,PhdPersuingStudentsList);;
  }

}
