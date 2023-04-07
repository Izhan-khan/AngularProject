import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntakeService } from 'src/app/service/intake/intake.service';



@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {

  successMsg = new String();
  errorMsg = new String();
  
  public institute:any;
  public sanctionIntakeList: any;
  public totalStudentsList: any;
  public programList: any;


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

  // Input form control
    sanctionIntakeInputForm_programId = new FormControl()
    sanctionIntakeInputForm_2020_21_Count = new FormControl("", [Validators.required])
    sanctionIntakeInputForm_2019_20_Count = new FormControl("", [Validators.required])
    sanctionIntakeInputForm_2018_19_Count = new FormControl("", [Validators.required])
    sanctionIntakeInputForm_2017_18_Count = new FormControl("", [Validators.required])
    sanctionIntakeInputForm_2016_17_Count = new FormControl("", [Validators.required])
    sanctionIntakeInputForm_2015_16_Count = new FormControl("", [Validators.required])

    totalStudentInputForm_programId = new FormControl()
    totalStudentInputForm_noOfMaleStudents =new FormControl("", [Validators.required])
    totalStudentInputForm_noOfFemaleStudents =new FormControl("", [Validators.required])
    totalStudentInputForm_withinState =new FormControl("", [Validators.required])
    totalStudentInputForm_outsideState =new FormControl("", [Validators.required])
    totalStudentInputForm_outsideCountry =new FormControl("", [Validators.required])
    totalStudentInputForm_economicallyBackward =new FormControl("", [Validators.required])
    totalStudentInputForm_sociallyChallenged =new FormControl("", [Validators.required])
    totalStudentInputForm_recievedFeeStateAndCentralGovernment =new FormControl("", [Validators.required])
    totalStudentInputForm_recievedFeeFromInstitutionalFunds =new FormControl("", [Validators.required])
    totalStudentInputForm_recievedFeeFromPrivateBodies = new FormControl("", [Validators.required])
    totalStudentInputForm_notRecievedFeeReimbursement = new FormControl("", [Validators.required])




  constructor(private intakeService: IntakeService) {
    this.institute= JSON.parse(sessionStorage.getItem('instituteObj')!);
   }



  ngOnInit(): void {

    // Methods that return list
    this.getSactionApprovedListFromService();
    this.getTotalStudentListFromService();
    this.getProgramList();

  }

  
  // sactionIntake_programId_Change(event: MatSelectChange) {
  //   console.log("event :",event.value);
  // }

  public getProgramFromId(id: number) {
    return this.intakeService.getProgramFromId(id);
  }

  public getProgramList() {
    return this.intakeService.getProgramNameList().subscribe(
      (data) => {
        // console.log(data);
        this.programList = data;
      }, (error) => {

      }
    )
  }


  public getSactionApprovedListFromService() {
    this.intakeService.getSactionApprovedList(this.institute.collegeId).subscribe(
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
    this.intakeService.getTotalStudentList(this.institute.collegeId).subscribe(
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

    if (sanctionIntakeInput.programId == "" && sanctionIntakeInput._2020_21_Count == "" && sanctionIntakeInput._2019_20_Count == "" &&
      sanctionIntakeInput._2018_19_Count == "" && sanctionIntakeInput._2017_18_Count == "" && sanctionIntakeInput._2016_17_Count == ""
      && sanctionIntakeInput._2015_16_Count == "") {

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

  }


  addTotalStudentsList(totalStudentsList: any, totalStudentInput: any) {

    if (totalStudentInput.programId != "" && totalStudentInput.noOfMaleStudents != "" && totalStudentInput.noOfFemaleStudents != "" &&
      totalStudentInput.withinState != "" && totalStudentInput.outsideState != "" && totalStudentInput.outsideCountry != ""
      && totalStudentInput.economicallyBackward != "" && totalStudentInput.sociallyChallenged != ""
      && totalStudentInput.recievedFeeStateAndCentralGovernment != "" && totalStudentInput.recievedFeeFromInstitutionalFunds != ""
      && totalStudentInput.recievedFeeFromPrivateBodies != "" && totalStudentInput.notRecievedFeeReimbursement != ""
    ) {

      this.totalStudentsList.push(totalStudentInput);
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

    if (totalStudentInput.programId == "" && totalStudentInput.noOfMaleStudents == "" && totalStudentInput.noOfFemaleStudents == "" &&
      totalStudentInput.withinState == "" && totalStudentInput.outsideState == "" && totalStudentInput.outsideCountry == ""
      && totalStudentInput.economicallyBackward == "" && totalStudentInput.sociallyChallenged == ""
      && totalStudentInput.recievedFeeStateAndCentralGovernment == "" && totalStudentInput.recievedFeeFromInstitutionalFunds == ""
      && totalStudentInput.recievedFeeFromPrivateBodies == "" && totalStudentInput.notRecievedFeeReimbursement == ""
    ) {
      
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

