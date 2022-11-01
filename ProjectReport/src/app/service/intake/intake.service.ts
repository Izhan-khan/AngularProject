import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sanctionIntake } from 'src/app/model/sanctionIntake.model';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {

  constructor(private http :HttpClient) { }

  public getSactionApprovedList(){
    return this.http.get(`${baseUrl}/sactionApprovedIntake/getList`);;
  }

  public addSactionApprovedList(sactionApprovedList:any) {
    return this.http.post(`${baseUrl}/sactionApprovedIntake/addList`,sactionApprovedList);;
  }

  public getTotalStudentList() {
    return this.http.get(`${baseUrl}/totalStudentStrength/getList`);;
  }

  public addTotalStudentList(totalStudentsList:any) {
    return this.http.post(`${baseUrl}/totalStudentStrength/addList`,totalStudentsList);;
  }

}
