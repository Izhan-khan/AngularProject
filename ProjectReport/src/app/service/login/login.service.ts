import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor( private http:HttpClient) { }

  public authenticate(user:any){
    // console.log(user)
    return this.http.post(`${helper.loginUrl}/authenticate`,user);
  }

  public getInstituteDetailsByCollegeId(collegeId:any){
    return this.http.get(`${helper.loginUrl}/getCollegeByCollegeId/`+collegeId);
  }

  public getUniversityListByCollegeId(collegeId:string) {
		return this.http.get(`${helper.loginUrl}/university/getList/`+collegeId);		
	}

}
