import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http:HttpClient) { }


  public getResearchDetailsById(id:number){
    return this.http.get(`${baseUrl}/researchDetails/getNameFromId/`+id);;
  }

  public getSponsoredResearchDetailsList(){
    return this.http.get(`${baseUrl}/sponsoredResearchDetails/getList`);;
  }

  public addSponsoredResearchDetailsList(SponsoredResearchDetailsList:any){
    return this.http.post(`${baseUrl}/sponsoredResearchDetails/addList`,SponsoredResearchDetailsList);;
  }

  
  public getConsultingProjectDetailsList(){
    return this.http.get(`${baseUrl}/consultingProjectDetails/getList`);;
  }

  public addConsultingProjectDetailsList(ConsultingProjectDetailsList:any){
    return this.http.post(`${baseUrl}/consultingProjectDetails/addList`,ConsultingProjectDetailsList);;
  }
}
