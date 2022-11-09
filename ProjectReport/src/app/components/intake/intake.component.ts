import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IntakeService } from 'src/app/service/intake/intake.service';
import { ProgramService } from 'src/app/service/program/program.service';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {


  // programName1 = new String();/
  successMsg = new String();
  errorMsg = new String();

  public programObj: any;

  public sanctionIntakeList: any;

  public totalStudentsList: any;



  constructor(private intakeService: IntakeService, private programService: ProgramService, private formBuilder: FormBuilder) { }



  ngOnInit(): void {

    this.getSactionApprovedListFromService();
    this.getTotalStudentListFromService();

  }


  public getSactionApprovedListFromService() {
    this.intakeService.getSactionApprovedList().subscribe(
      (data) => {
        this.sanctionIntakeList = data;
        // this.sanctionIntakeList.forEach((element: any) => {
        //   element.enableEdit = false;
        //   element._2020_21_Count=element[7];
        //   element._2019_20_Count=element[6];
        //   element._2018_19_Count=element[5];
        //   element._2017_18_Count=element[4];
        //   element._2016_17_Count=element[3];
        //   element._2015_16_Count=element[2];
        //   element.acedamicName=element[1];
        //   element.acedamicId=element[0];

        //   for (let index = 0; index <= 7; index++) {
        //     delete element[index]
        //   }
              
        // })
        // console.log(this.sanctionIntakeList);

      }, (error) => {
        console.log(error);
      }
    )
  }


  public getTotalStudentListFromService() {
    this.intakeService.getTotalStudentList().subscribe(
      (data) => {
        this.totalStudentsList = data;
      }, (error) => {
        console.log(error);
      }
    )
  }


  onSanctionIntakeEdit(item: any, attribute: any) {
    this.sanctionIntakeList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;
    console.log(this.sanctionIntakeList);
    
  }

  onSanctionIntakeClose(item: any) {
    item.enableEdit = "";
  }

  onTotalStudentsEdit(item: any, attribute: any) {
    this.totalStudentsList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;
    console.log(this.totalStudentsList);
    
  }

  onTotalStudentsClose(item: any) {
    item.enableEdit = "";
  }


 addSanctionIntakeList(sanctionIntakeList: any) {
      
    this.sanctionIntakeList.forEach((element: {
      id: any;
      acedamicName: any;
      enableEdit?: boolean;
    }) => {
      delete element.id;
      delete element.acedamicName;
      delete element.enableEdit;
    });
    console.info( this.sanctionIntakeList);

    this.intakeService.addSactionApprovedList(sanctionIntakeList).subscribe(
      (data) => {
        console.info(this.sanctionIntakeList);
        this.successMsg = "Data Inserted"
      }, (error) => {
        console.log(error);
      });
    this.getSactionApprovedListFromService;

  }


  addTotalStudentsList(totalStudentsList: any) {

    this.totalStudentsList.forEach((element: {
      id: any;
      acedamicId: any;
      enableEdit?: boolean;
    }) => {
      delete element.id;
      delete element.enableEdit;
    });

    this.intakeService.addTotalStudentList(totalStudentsList).subscribe(
      (data) => {
        console.info(this.totalStudentsList);
        this.successMsg = "Data Inserted";
        setTimeout(() => { this.successMsg = ""; }, 7000);
      }, (error) => {
        console.log(error);
      });
    this.getTotalStudentListFromService;

  }



}

