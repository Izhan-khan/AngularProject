import { HttpClient } from '@angular/common/http';
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

  public getCollegeNameListByUniversityId(university_id:string) {
		return this.http.get(`${helper.universityUrl}/college/getListWithName/`+university_id);		
	}

  

}
