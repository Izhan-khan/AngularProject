import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { data, error } from 'jquery';
import { IntakeService } from 'src/app/service/intake/intake.service';
import { ProgramService } from 'src/app/service/program/program.service';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {

  successMsg = new String();
  errorMsg = new String();

  // Pagination parameters.
  sactionIntakeCurrentPage: number = 1;
  sactionIntakeItems: number = 3;
  totalStudentsCurrentPage: number = 1;
  totalStudentsItems: number = 3;

  public sanctionIntakeList: any;
  public totalStudentsList: any;
  public programList: any;



  constructor(private intakeService: IntakeService, private programService: ProgramService) { }



  ngOnInit(): void {

    this.getSactionApprovedListFromService();
    this.getTotalStudentListFromService();
    this.getProgramList();
    // this.getSactionApprovedListNameFromService();
    // console.warn(this.getSactionApprovedListNameFromService);

  }


  public getProgramFromId(id: number) {
    return this.programService.getProgramFromId(id);
  }

  public getProgramList() {
    return this.programService.getProgramNameList().subscribe(
      (data) => {
        console.log(data);
        this.programList = data;
      }, (error) => {

      }
    )
  }


  public getSactionApprovedListFromService() {
    this.intakeService.getSactionApprovedList().subscribe(
      (data: any) => {

        this.sanctionIntakeList = data;

        this.sanctionIntakeList.forEach((element: any) => {
          element.enableEdit = false;
          this.getProgramFromId(element.programId).subscribe(
            (data: any) => {
              element.programName = data.programName;
            }, (error) => {
              console.log(error);
            }
          );
        })
        console.log("Saction Approved List: ", this.sanctionIntakeList);

      }, (error) => {
        console.log(error);
      }
    )
  }


  public getTotalStudentListFromService() {
    this.intakeService.getTotalStudentList().subscribe(
      (data) => {
        this.totalStudentsList = data;

        this.totalStudentsList.forEach((element: any) => {
          element.enableEdit = false;
          this.getProgramFromId(element.programId).subscribe(
            (data: any) => {
              element.programName = data.programName;
            }, (error) => {
              console.log(error);
            }
          );
        })
        console.log("Total Student List: ", this.totalStudentsList);
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
  }

  onSanctionIntakeClose(item: any) {
    item.enableEdit = "";
  }

  onTotalStudentsEdit(item: any, attribute: any) {
    this.totalStudentsList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;
  }

  onTotalStudentsClose(item: any) {
    item.enableEdit = "";
  }


  addSanctionIntakeList(sanctionIntakeList: any) {

    this.intakeService.addSactionApprovedList(sanctionIntakeList).subscribe(
      (data) => {
        console.warn("Saction Approved List: ", this.sanctionIntakeList);
        this.successMsg = "Data Inserted"
      }, (error) => {
        console.log(error);
        this.errorMsg = "Something is wrong"
      });
    this.getSactionApprovedListFromService;

  }


  addTotalStudentsList(totalStudentsList: any) {

    this.intakeService.addTotalStudentList(totalStudentsList).subscribe(
      (data) => {
        console.warn("Total Student List: ", this.totalStudentsList);
        this.successMsg = "Data Inserted";
        setTimeout(() => { this.successMsg = ""; }, 7000);
      }, (error) => {
        console.log(error);
        this.errorMsg = "Something is wrong"
      });
    this.getTotalStudentListFromService;

  }

  saveandnext() {
    //alert("click me")
    $('#intake-tab').removeClass('active');
    $('#intake-tab-pane').removeClass('active');
    $('#intake-tab-pane').removeClass('show');
    $('#ugpg-tab').addClass('active');
    $('#ugpg-tab').removeClass('disabled');
    $('#ugpg-tab-pane').addClass('active');
    $('#ugpg-tab-pane').addClass('show');
  }



}

