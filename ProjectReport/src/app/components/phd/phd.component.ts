import { Component, OnInit } from '@angular/core';
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


}
