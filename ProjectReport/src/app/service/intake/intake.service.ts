import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sanctionIntake } from 'src/app/model/sanctionIntake.model';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {

  constructor(private http :HttpClient) { }

  public getSactionApprovedList(){
    return this.http.get(`${helper.loginUrl}/sactionApprovedIntake/getList`);;
  }

  public addSactionApprovedList(sactionApprovedList:any) {
    return this.http.post(`${helper.loginUrl}/sactionApprovedIntake/addList`,sactionApprovedList);;
  }

  public getTotalStudentList() {
    return this.http.get(`${helper.loginUrl}/totalStudentStrength/getList`);;
  }

  public addTotalStudentList(totalStudentsList:any) {
    return this.http.post(`${helper.loginUrl}/totalStudentStrength/addList`,totalStudentsList);;
  }

}
