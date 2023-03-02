import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor( private http:HttpClient) { }

  public authenticate(university:any){
    console.log("university : ",university);
    return this.http.post(`${helper.universityUrl}/authenticate`,university);
  }

  public getUniversityNamesList(){
    return this.http.get(`${helper.universityUrl}/getListWithName`);
  }

  public getUniversityFromUid(Uid:number){
    return this.http.get(`${helper.universityUrl}/getUniversityById/`+Uid);
  }

  public getCollegeListByUniversityId(university_id:string) {
		return this.http.get(`${helper.universityUrl}/college/getList/`+university_id);		
	}


  public compareInstituteByUniversity(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,programId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('programId', programId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/`,params);		
	}


  

}
