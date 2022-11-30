import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntakeService } from 'src/app/service/intake/intake.service';
import { ProgramService } from 'src/app/service/program/program.service';
import { MatSelectChange } from "@angular/material/select";



@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {

  sactionIntake_programId = new FormControl("", [Validators.required])
  sactionIntake_2020_21_Count = new FormControl("", [Validators.required])
  sactionIntake_2019_20_Count = new FormControl("", [Validators.required])
  sactionIntake_2018_19_Count = new FormControl("", [Validators.required])
  sactionIntake_2017_18_Count = new FormControl("", [Validators.required])
  sactionIntake_2016_17_Count = new FormControl("", [Validators.required])
  sactionIntake_2015_16_Count = new FormControl("", [Validators.required])

  totalStudent_programId = new FormControl("", [Validators.required]);
  totalStudent_noOfMaleStudents= new FormControl("", [Validators.required])
  totalStudent_noOfFemaleStudents= new FormControl("", [Validators.required])
  totalStudent_withinState =new FormControl("", [Validators.required])
  totalStudent_outsideState =new FormControl("", [Validators.required])
  totalStudent_outsideCountry =new FormControl("", [Validators.required])
  totalStudent_economicallyBackward= new FormControl("", [Validators.required])
  totalStudent_sociallyChallenged =new FormControl("", [Validators.required])
  totalStudent_recievedFeeStateAndCentralGovernment= new FormControl("", [Validators.required])
  totalStudent_recievedFeeFromInstitutionalFunds= new FormControl("", [Validators.required])
  totalStudent_recievedFeeFromPrivateBodies= new FormControl("", [Validators.required])
  totalStudent_notRecievedFeeReimbursement= new FormControl("", [Validators.required])
    

  successMsg = new String();
  errorMsg = new String();

  // Pagination parameters.
  sactionIntakeCurrentPage: number = 1;
  sactionIntakeItems: number = 3;
  totalStudentsCurrentPage: number = 1;
  totalStudentsItems: number = 3;

  public sanctionIntakeInput: any = {
    programId: "",
    _2020_21_Count: "",
    _2019_20_Count: "",
    _2018_19_Count: "",
    _2017_18_Count: "",
    _2016_17_Count: "",
    _2015_16_Count: ""
  }


  public totalStudentInput: any = {
    programId: "",
    noOfMaleStudents: "",
    noOfFemaleStudents: "",
    withinState: "",
    outsideState: "",
    outsideCountry: "",
    economicallyBackward: "",
    sociallyChallenged: "",
    recievedFeeStateAndCentralGovernment: "",
    recievedFeeFromInstitutionalFunds: "",
    recievedFeeFromPrivateBodies: "",
    notRecievedFeeReimbursement: ""
  }



  public sanctionIntakeList: any;
  public totalStudentsList: any;
  public programList: any;

  intakeForm:any;
  

  constructor(private intakeService: IntakeService, private programService: ProgramService) { }



  ngOnInit(): void {

    this.intakeForm = new FormGroup({
    
    })

    // Methods that return list
    this.getSactionApprovedListFromService();
    this.getTotalStudentListFromService();
    this.getProgramList();

  }

  // Getters of saction Intake   
  // get sactionIntake_programId() {
  //   return this.intakeForm.get('sactionIntake_programId');
  // }get sactionIntake_2020_21_Count() {
  //   return this.intakeForm.get('sactionIntake_2020_21_Count');
  // } get sactionIntake_2019_20_Count() {
  //   return this.intakeForm.get('sactionIntake_2019_20_Count');
  // } get sactionIntake_2018_19_Count() {
  //   return this.intakeForm.get('sactionIntake_2018_19_Count');
  // } get sactionIntake_2017_18_Count() {
  //   return this.intakeForm.get('sactionIntake_2017_18_Count');
  // } get sactionIntake_2016_17_Count() {
  //   return this.intakeForm.get('sactionIntake_2016_17_Count');
  // } get sactionIntake_2015_16_Count() {
  //   return this.intakeForm.get('sactionIntake_2015_16_Count');
  // }

  // // Getters of totalStudent  

  // get totalStudent_programId() {
  //   return this.intakeForm.get('totalStudent_programId');
  // }get totalStudent_noOfMaleStudents() {
  //   return this.intakeForm.get('totalStudent_noOfMaleStudents');
  // } get totalStudent_noOfFemaleStudents() {
  //   return this.intakeForm.get('totalStudent_noOfFemaleStudents');
  // } get totalStudent_withinState() {
  //   return this.intakeForm.get('totalStudent_withinState');
  // } get totalStudent_outsideState() {
  //   return this.intakeForm.get('totalStudent_outsideState');
  // } get totalStudent_outsideCountry() {
  //   return this.intakeForm.get('totalStudent_outsideCountry');
  // } get totalStudent_economicallyBackward() {
  //   return this.intakeForm.get('totalStudent_economicallyBackward');
  // } get totalStudent_sociallyChallenged() {
  //   return this.intakeForm.get('totalStudent_sociallyChallenged');
  // } get totalStudent_recievedFeeStateAndCentralGovernment() {
  //   return this.intakeForm.get('totalStudent_recievedFeeStateAndCentralGovernment');
  // } get totalStudent_recievedFeeFromInstitutionalFunds() {
  //   return this.intakeForm.get('totalStudent_recievedFeeFromInstitutionalFunds');
  // } get totalStudent_recievedFeeFromPrivateBodies() {
  //   return this.intakeForm.get('totalStudent_recievedFeeFromPrivateBodies');
  // } get totalStudent_notRecievedFeeReimbursement() {
  //   return this.intakeForm.get('totalStudent_notRecievedFeeReimbursement');
  // }

  onSactionIntake_programId_Change(event: MatSelectChange) {
    console.log("saction");
    
    this.intakeForm.addControl('sactionIntake_programId', new FormControl("", [Validators.required]),);
    this.intakeForm.addControl('sactionIntake_2020_21_Count', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('sactionIntake_2019_20_Count', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('sactionIntake_2018_19_Count', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('sactionIntake_2017_18_Count', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('sactionIntake_2016_17_Count', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('sactionIntake_2015_16_Count', new FormControl("", [Validators.required]));
  }

  onTotalStudent_programId_Change(event: MatSelectChange) {    
    console.log("total");
    
    this.intakeForm.addControl('totalStudent_programId', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_noOfMaleStudents', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_noOfFemaleStudents', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_withinState', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_outsideState', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_outsideCountry', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_economicallyBackward', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_sociallyChallenged', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_recievedFeeStateAndCentralGovernment', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_recievedFeeFromInstitutionalFunds', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_recievedFeeFromPrivateBodies', new FormControl("", [Validators.required]));
    this.intakeForm.addControl('totalStudent_notRecievedFeeReimbursement', new FormControl("", [Validators.required]));
  }

  public getProgramFromId(id: number) {
    return this.programService.getProgramFromId(id);
  }

  public getProgramList() {
    return this.programService.getProgramNameList().subscribe(
      (data) => {
        // console.log(data);
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


  addSanctionIntakeList(sanctionIntakeList: any, sanctionIntakeInput: any) {

    if (sanctionIntakeInput.programId != "" && sanctionIntakeInput._2020_21_Count != "" && sanctionIntakeInput._2019_20_Count != "" &&
      sanctionIntakeInput._2018_19_Count != "" && sanctionIntakeInput._2017_18_Count != "" && sanctionIntakeInput._2016_17_Count != ""
      && sanctionIntakeInput._2015_16_Count != "") {
      this.sanctionIntakeList.push(sanctionIntakeInput);
    }
    this.intakeService.addSactionApprovedList(sanctionIntakeList).subscribe(
      (data) => {
        console.warn("Saction Approved List Adding : ", sanctionIntakeList);
        this.successMsg = "Data Inserted"
        setTimeout(() => { this.successMsg = ""; }, 7000);
        this.sanctionIntakeList = sanctionIntakeList;
        this.getSactionApprovedListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg = "Something is wrong"
      });
  }


  addTotalStudentsList(totalStudentsList: any, totalStudentInput: any) {

    if (totalStudentInput.programId != "" && totalStudentInput.noOfMaleStudents != "" && totalStudentInput.noOfFemaleStudents != "" &&
      totalStudentInput.withinState != "" && totalStudentInput.outsideState != "" && totalStudentInput.outsideCountry != ""
      && totalStudentInput.economicallyBackward != "" && totalStudentInput.sociallyChallenged != ""
      && totalStudentInput.recievedFeeStateAndCentralGovernment != "" && totalStudentInput.recievedFeeFromInstitutionalFunds != ""
      && totalStudentInput.recievedFeeFromPrivateBodies != "" && totalStudentInput.notRecievedFeeReimbursement != ""
    ) {
      this.totalStudentsList.push(totalStudentInput);
    }

    this.intakeService.addTotalStudentList(totalStudentsList).subscribe(
      (data) => {
        console.warn("Total Student List Adding : ", totalStudentsList);
        this.successMsg = "Data Inserted";
        setTimeout(() => { this.successMsg = ""; }, 7000);
        this.totalStudentsList = totalStudentsList;
        this.getTotalStudentListFromService();
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

