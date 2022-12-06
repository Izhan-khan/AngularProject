import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { error } from 'jquery';
import { PhdService } from 'src/app/service/phd/phd.service';

@Component({
  selector: 'app-phd',
  templateUrl: './phd.component.html',
  styleUrls: ['./phd.component.css']
})
export class PhdComponent implements OnInit {

  successMsg = new String();
  errorMsg = new String();

  public PhdGraduatedStudentsList :any;
  public PhdPersuingStudentsList :any;
  

  public PhdPersuingStudentInput: any = {
    programTime: "",
    programTimeId: "",
    totalStudentsCount: ""
  }
  public PhdGraduatedStudentInput: any = {
    programTime: "",
    programTimeId: "",
    _2018_19_Count: "",
    _2019_20_Count: "",
    _2020_21_Count: ""
  }

   // Input form control
   PhdPersuingStudentInputForm_programTime = new FormControl()
   PhdPersuingStudentInputForm_totalStudentsCount = new FormControl("", [Validators.required])

   PhdGraduatedStudentInputForm_programTime = new FormControl()
   PhdGraduatedStudentInputForm_2018_19_Count = new FormControl("", [Validators.required])
   PhdGraduatedStudentInputForm_2019_20_Count = new FormControl("", [Validators.required])
   PhdGraduatedStudentInputForm_2020_21_Count = new FormControl("", [Validators.required])


  constructor(private phdService:PhdService) { }
    

  ngOnInit(): void {
    this.getPhdPersuingStudentsListFromService();
    this.getPhdGraduatedStudentsListFromService();
  }


  public getProgramTime(id: number) {
    return this.phdService.getProgramById(id);
  }  

  public getPhdGraduatedStudentsListFromService(){
    this.phdService.getPhdGraduatedStudentsList().subscribe(
      (data)=>{
        this.PhdGraduatedStudentsList=data;
        this.PhdGraduatedStudentsList.forEach((element: any) => {
          element.enableEdit = false;
          this.getProgramTime(element.programTimeId).subscribe(
            (data:any) =>{
              element.programTime= data.programTime;
            },(error) =>{
              console.log(error);
            }
          );
        })
        console.log("Phd Graduated Student List: ", this.PhdGraduatedStudentsList);
      },(error)=>{
        console.log(error);
      }
    )    
  }
  public getPhdPersuingStudentsListFromService(){
    this.phdService.getPhdPersuingStudentsList().subscribe(
      (data)=>{
        this.PhdPersuingStudentsList=data;
        this.PhdPersuingStudentsList.forEach((element: any) => {
          element.enableEdit = false;
          this.getProgramTime(element.programTimeId).subscribe(
            (data:any) =>{
              element.programTime= data.programTime;
            },(error) =>{
              console.log(error);
            }
          );
        })
        console.log("Phd Persuing Student List: ", this.PhdPersuingStudentsList);
      },(error)=>{
        console.log(error);
      }
    )
  }

  onPhdPersuingStudentEdit(item: any, attribute: any) {
    this.PhdPersuingStudentsList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;

  }
  onPhdPersuingStudentClose(item: any) {
    item.enableEdit = "";
  }

  onPhdGraduatedStudentsEdit(item: any, attribute: any) {
    this.PhdGraduatedStudentsList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;
  }

  onPhdGraduatedStudentsClose(item: any) {
    item.enableEdit = "";
  }

  addPhdPersuingStudentList(PhdPersuingStudentsList: any) {  
    console.log(PhdPersuingStudentsList);
    this.phdService.addPhdPersuingStudentsList(PhdPersuingStudentsList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getPhdPersuingStudentsListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg="Something is wrong"
      });
  }

  addPhdGraduatedStudentsList(PhdGraduatedStudentsList: any) {
    console.log(PhdGraduatedStudentsList);
    this.phdService.addPhdGraduatedStudentsList(PhdGraduatedStudentsList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getPhdGraduatedStudentsListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg="Something is wrong"
      });
   
  }

  previous(){
    $('#phd-tab').removeClass('active');
    $('#phd-tab-pane').removeClass('active');
    $('#phd-tab-pane').removeClass('show');
    $('#ugpg-tab').addClass('active');
    $('#ugpg-tab').removeClass('disabled');
    $('#ugpg-tab-pane').addClass('active');
    $('#ugpg-tab-pane').addClass('show');
  
  }
  saveandnext() {
    //alert("click me")
    $('#phd-tab').removeClass('active');
    $('#phd-tab-pane').removeClass('active');
    $('#phd-tab-pane').removeClass('show');
    $('#research-tab').addClass('active');
    $('#research-tab').removeClass('disabled');
    $('#research-tab-pane').addClass('active');
    $('#research-tab-pane').addClass('show');
  }


}
