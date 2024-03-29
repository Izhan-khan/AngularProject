import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class PhdService {

  constructor(private http:HttpClient) { }

  public getProgramById(id:number){
    return this.http.get(`${helper.loginUrl}/programTime/getNameFromId/`+id);;
  }

  public getPhdGraduatedStudentsList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/phdGraduated/getList/`+instituteId);;
  }

  public getPhdPersuingStudentsList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/phdPersuing/getList/`+instituteId);;
  }

  public addPhdGraduatedStudentsList(PhdGraduatedStudentsList:any){
    return this.http.post(`${helper.loginUrl}/phdGraduated/addList`,PhdGraduatedStudentsList);;
  }

  public addPhdPersuingStudentsList(PhdPersuingStudentsList:any){
    console.error(PhdPersuingStudentsList);
    return this.http.post(`${helper.loginUrl}/phdPersuing/addList`,PhdPersuingStudentsList);;
  }

}
