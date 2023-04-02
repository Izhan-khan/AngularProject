import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class UgPgService {

  constructor(private http:HttpClient) { }

  public getAcademicYearById(id:number){
    return this.http.get(`${helper.loginUrl}/academicYear/getNameFromId/`+id);;
  }

  public getAcademicYearList() {
    return this.http.get(`${helper.loginUrl}/academicYear/getList`);
  }

  public getUG_4yearList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/ug_4year/getList/`+instituteId);;
  }

  public addUG_4yearList(UG_4yearList:any){
    return this.http.post(`${helper.loginUrl}/ug_4year/addList`,UG_4yearList);;
  }

  public getPG_2yearList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/pg_2year/getList/`+instituteId);;
  }

  public addPG_2yearList(PG_2yearList:any){
    return this.http.post(`${helper.loginUrl}/pg_2year/addList`,PG_2yearList);;
  }


}
