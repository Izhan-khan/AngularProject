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

  public getSponsoredResearchDetailsList(){
    return this.http.get(`${helper.loginUrl}/sponsoredResearchDetails/getList`);;
  }

  public addSponsoredResearchDetailsList(SponsoredResearchDetailsList:any){
    return this.http.post(`${helper.loginUrl}/sponsoredResearchDetails/addList`,SponsoredResearchDetailsList);;
  }

  
  public getConsultingProjectDetailsList(){
    return this.http.get(`${helper.loginUrl}/consultingProjectDetails/getList`);;
  }

  public addConsultingProjectDetailsList(ConsultingProjectDetailsList:any){
    return this.http.post(`${helper.loginUrl}/consultingProjectDetails/addList`,ConsultingProjectDetailsList);;
  }
}
