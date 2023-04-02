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

  public institute:any
  public SponsoredResearchDetailsList :any;
  public ConsultingProjectDetailsList :any;
  

  constructor(private researchService:ResearchService) { 
    this.institute=JSON.parse(sessionStorage.getItem('instituteObj')!);
  }

  ngOnInit(): void {
    this.getSponsoredResearchDetailsListFromService();
    this.getConsultingProjectDetailsListFromService();
  }

  public getResearchDetails(id:number){
    return this.researchService.getResearchDetailsById(id)
  }

  public getSponsoredResearchDetailsListFromService(){
    this.researchService.getSponsoredResearchDetailsList(this.institute.collegeId).subscribe(
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
    this.researchService.getConsultingProjectDetailsList(this.institute.collegeId).subscribe(
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
  


  previous(){
    $('#research-tab').removeClass('active');
    $('#research-tab-pane').removeClass('active');
    $('#research-tab-pane').removeClass('show');
    $('#phd-tab').addClass('active');
    $('#phd-tab').removeClass('disabled');
    $('#phd-tab-pane').addClass('active');
    $('#phd-tab-pane').addClass('show');
  
  }
  saveandnext() {
    //alert("click me")
    $('#research-tab').removeClass('active');
    $('#research-tab-pane').removeClass('active');
    $('#research-tab-pane').removeClass('show');
    $('#pcs-tab').addClass('active');
    $('#pcs-tab').removeClass('disabled');
    $('#pcs-tab-pane').addClass('active');
    $('#pcs-tab-pane').addClass('show');
  }




}
