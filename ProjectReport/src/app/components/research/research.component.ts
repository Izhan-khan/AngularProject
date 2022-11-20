import { Component, OnInit } from '@angular/core';
import { data, error } from 'jquery';
import { ResearchService } from 'src/app/service/research/research.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  successMsg = new String();
  errorMsg = new String();

  public SponsoredResearchDetailsList :any;
  public ConsultingProjectDetailsList :any;
  

  constructor(private researchService:ResearchService) { }

  ngOnInit(): void {
    this.getSponsoredResearchDetailsListFromService();
    this.getConsultingProjectDetailsListFromService();
  }

  public getResearchDetails(id:number){
    return this.researchService.getResearchDetailsById(id)
  }

  public getSponsoredResearchDetailsListFromService(){
    this.researchService.getSponsoredResearchDetailsList().subscribe(
      (data)=>{
        this.SponsoredResearchDetailsList=data;
        this.SponsoredResearchDetailsList.forEach((element: any) => {
          element.enableEdit = false;
          this.getResearchDetails(element.researchDetailsId).subscribe(
            (data:any) =>{
              element.researchDetails= data.researchDetails;
            },(error) =>{
              console.log(error);
            }
          );
        })
        console.log("Sponsored Research Details List: ", this.SponsoredResearchDetailsList);
      },(error)=>{
        console.log(error);
        
      }
    )
  }

  addSponsoredResearchDetailsList(SponsoredResearchDetailsList: any) {
    this.researchService.addSponsoredResearchDetailsList(SponsoredResearchDetailsList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getSponsoredResearchDetailsListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg="Something is wrong"
      });
  }


  onSponsoredResearchDetailsListEdit(item: any, attribute: any) {
    this.SponsoredResearchDetailsList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;

  }
  onSponsoredResearchDetailsListClose(item: any) {
    item.enableEdit = "";
  }


  public getConsultingProjectDetailsListFromService(){
    this.researchService.getConsultingProjectDetailsList().subscribe(
      (data)=>{
        this.ConsultingProjectDetailsList=data;
        this.ConsultingProjectDetailsList.forEach((element: any) => {
          element.enableEdit = false;
          this.getResearchDetails(element.researchDetailsId).subscribe(
            (data:any) =>{
              element.researchDetails= data.researchDetails;
            },(error) =>{
              console.log(error);
            }
          );
        })
        console.log("Consulting Project Details List: ", this.ConsultingProjectDetailsList);
      },(error)=>{
        console.log(error);
        
      }
    )
  }

  addConsultingProjectDetailsList(ConsultingProjectDetailsList: any) {
    this.researchService.addConsultingProjectDetailsList(ConsultingProjectDetailsList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getConsultingProjectDetailsListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg="Something is wrong"
      });
  }


  onConsultingProjectDetailsListEdit(item: any, attribute: any) {
    this.ConsultingProjectDetailsList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;
  }
  onConsultingProjectDetailsListClose(item: any) {
    item.enableEdit = "";
  }
  



}
