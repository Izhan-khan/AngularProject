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


  public compareInstituteByIntake(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,programId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('programId', programId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/intake/`,params);		
	}

  public compareInstituteByTotalStudents(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,programId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('programId', programId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/totalStudents/`,params);		
	}

  public compareInstituteByPhdPersuing(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,programTimeId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('programTimeId', programTimeId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/phdPersuing/`,params);		
	}

  
  public compareInstituteByPhdGraduated(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,programTimeId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('programTimeId', programTimeId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/phdGraduated/`,params);		
	}
  
  
  public compareInstituteBySponsoredResearch(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,researchDetailsId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('researchDetailsId', researchDetailsId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/sponsoredResearch/`,params);		
	}

  
  public compareInstituteByConsultingProjectResearch(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,researchDetailsId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('researchDetailsId', researchDetailsId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/consultingProjectResearch/`,params);		
	}
  
  
  
  public getUG_4_YearByCollegeAndUniversity(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,academicYearId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('academicYearId', academicYearId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/ug/`,params);		
	}

  
  public getPG_2_YearByCollegeAndUniversity(loginUniversity:string,loginInstitute:string,comparingUniversity:string,comparingInstitute :string,academicYearId:any) {
		
    var params = new HttpParams()
    .set('loginUniversity', loginUniversity)
    .set('loginInstitute', loginInstitute)
    .set('comparingUniversity', comparingUniversity)
    .set('comparingInstitute', comparingInstitute)
    .set('academicYearId', academicYearId);
  

    return this.http.post(`${helper.universityUrl}/compareColleges/pg/`,params);		
	}
  

}
