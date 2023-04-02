import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http:HttpClient) { }


  public getResearchDetailsById(id:number){
    return this.http.get(`${helper.loginUrl}/researchDetails/getNameFromId/`+id);;
  }

  public getSponsoredResearchDetailsList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/sponsoredResearchDetails/getList/`+instituteId);;
  }

  public addSponsoredResearchDetailsList(SponsoredResearchDetailsList:any){
    return this.http.post(`${helper.loginUrl}/sponsoredResearchDetails/addList`,SponsoredResearchDetailsList);;
  }

  
  public getConsultingProjectDetailsList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/consultingProjectDetails/getList/`+instituteId);;
  }

  public addConsultingProjectDetailsList(ConsultingProjectDetailsList:any){
    return this.http.post(`${helper.loginUrl}/consultingProjectDetails/addList`,ConsultingProjectDetailsList);;
  }
}
