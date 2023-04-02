import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { data } from 'jquery';
import { UgPgService } from 'src/app/service/ug-pg/ug-pg.service';

@Component({
  selector: 'app-ug-pg',
  templateUrl: './ug-pg.component.html',
  styleUrls: ['./ug-pg.component.css']
})
export class UgPgComponent implements OnInit {
  successMsg = new String();
  errorMsg = new String();

  // Pagination parameters.
  UG_4yearCurrentPage: number = 1;
  UG_4yearItems: number = 3;
  PG_2yearCurrentPage: number = 1;
  PG_2yearItems: number = 3;

  public institute:any;
  public UG_4yearList: any;
  public PG_2yearList: any;
  public academicYearList: any;


  public UG_4year_Input: any = {
    AcademicYear: "",
    firstYearStudentIntakeCount: "",
    firstYearStudentAdmittedCount: "",
    lateralEntryStudentCount: "",
    studentGraduatedInMinTimeCount: "",
    studentPlacedCount: "",
    medianSalaryOfPlacedStudentCount: "",
    studentSelectedForHigerStudiesCount: ""
  }
  public PG_2year_Input: any = {
    AcademicYear: "",
    firstYearStudentIntakeCount: "",
    firstYearStudentAdmitted: "",
    studentGraduatedInMinTimeCount: "",
    studentPlacedCount: "",
    medianSalaryOfPlacedStudentCount: "",
    studentSelectedForHigerStudiesCount: ""
  }


  // Input form control
  UG_4year_InputForm_AcademicYear = new FormControl()
  UG_4year_InputForm_firstYearStudentIntakeCount = new FormControl("", [Validators.required])
  UG_4year_InputForm_firstYearStudentAdmittedCount = new FormControl("", [Validators.required])
  UG_4year_InputForm_lateralEntryStudentCount = new FormControl("", [Validators.required])
  UG_4year_InputForm_studentGraduatedInMinTimeCount = new FormControl("", [Validators.required])
  UG_4year_InputForm_studentPlacedCount = new FormControl("", [Validators.required])
  UG_4year_InputForm_medianSalaryOfPlacedStudentCount = new FormControl("", [Validators.required])
  UG_4year_InputForm_studentSelectedForHigerStudiesCount = new FormControl("", [Validators.required])

  PG_2year_InputForm_AcademicYear = new FormControl()
  PG_2year_InputForm_firstYearStudentIntakeCount = new FormControl("", [Validators.required])
  PG_2year_InputForm_firstYearStudentAdmitted = new FormControl("", [Validators.required])
  PG_2year_InputForm_studentGraduatedInMinTimeCount = new FormControl("", [Validators.required])
  PG_2year_InputForm_studentPlacedCount = new FormControl("", [Validators.required])
  PG_2year_InputForm_medianSalaryOfPlacedStudentCount = new FormControl("", [Validators.required])
  PG_2year_InputForm_studentSelectedForHigerStudiesCount = new FormControl("", [Validators.required])





  constructor(private ugPgService: UgPgService) {
    this.institute= JSON.parse(sessionStorage.getItem('instituteObj')!);
   }

  ngOnInit(): void {
    this.getUG_4yearListFromService();
    this.getPG_2yearListFromService();
    this.getAcademicYearList();
  }

  public getAcademicYear(id: number) {
    return this.ugPgService.getAcademicYearById(id);
  }

  public getAcademicYearList() {
    return this.ugPgService.getAcademicYearList().subscribe(
      (data) => {
        this.academicYearList = data;
        // console.log(data);

      }, (error) => {
        console.log(error);
      }
    );
  }

  public getUG_4yearListFromService() {
    this.ugPgService.getUG_4yearList(this.institute.collegeId).subscribe(
      (data) => {
        this.UG_4yearList = data;
        this.UG_4yearList.forEach((element: any) => {
          element.enableEdit = false;
          this.getAcademicYear(element.academicYearId).subscribe(
            (data: any) => {
              element.AcademicYear = data.academicYear;
            }, (error) => {
              console.log(error);
            }
          );
        })
        console.log("UG 4 year List: ", this.UG_4yearList);
      }, (error) => {
        console.log(error);
      }
    )
  }

  addUG_4yearList(UG_4yearList: any, UG_4year_Input: any) {

    if (UG_4year_Input.AcademicYear != "" && UG_4year_Input.firstYearStudentIntakeCount != ""
      && UG_4year_Input.firstYearStudentAdmittedCount != "" && UG_4year_Input.lateralEntryStudentCount != ""
      && UG_4year_Input.studentGraduatedInMinTimeCount != "" && UG_4year_Input.studentPlacedCount != ""
      && UG_4year_Input.medianSalaryOfPlacedStudentCount != "" && UG_4year_Input.studentSelectedForHigerStudiesCount != "") {

      this.UG_4yearList.push(UG_4year_Input);
      this.ugPgService.addUG_4yearList(UG_4yearList).subscribe(
        (data) => {
          console.warn("UG 4 year Adding : ", UG_4yearList);
          this.successMsg = "Data Inserted"
          setTimeout(() => { this.successMsg = ""; }, 7000);
          this.UG_4yearList = UG_4yearList;
          this.getUG_4yearListFromService();
        }, (error) => {
          console.log(error);
          this.errorMsg = "Something is wrong"
        });
    }

    if (UG_4year_Input.AcademicYear == "" && UG_4year_Input.firstYearStudentIntakeCount == ""
      && UG_4year_Input.firstYearStudentAdmittedCount == "" && UG_4year_Input.lateralEntryStudentCount == ""
      && UG_4year_Input.studentGraduatedInMinTimeCount == "" && UG_4year_Input.studentPlacedCount == ""
      && UG_4year_Input.medianSalaryOfPlacedStudentCount == "" && UG_4year_Input.studentSelectedForHigerStudiesCount == "") {

      this.ugPgService.addUG_4yearList(UG_4yearList).subscribe(
        (data) => {
          console.warn("UG 4 year Adding : ", UG_4yearList);
          this.successMsg = "Data Inserted"
          setTimeout(() => { this.successMsg = ""; }, 7000);
          this.UG_4yearList = UG_4yearList;
          this.getUG_4yearListFromService();
        }, (error) => {
          console.log(error);
          this.errorMsg = "Something is wrong"
        });
    }
  }

  onUG_4yearEdit(item: any, attribute: any) {
    this.UG_4yearList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;

  }
  onUG_4yearClose(item: any) {
    item.enableEdit = "";
  }




  public getPG_2yearListFromService() {
    this.ugPgService.getPG_2yearList(this.institute.collegeId).subscribe(
      (data) => {
        this.PG_2yearList = data;
        this.PG_2yearList.forEach((element: any) => {
          element.enableEdit = false;
          this.getAcademicYear(element.academicYearId).subscribe(
            (data: any) => {
              element.AcademicYear = data.academicYear;
            }, (error) => {
              console.log(error);
            }
          );
        })
        console.log("PG 2 year List: ", this.PG_2yearList);
      }, (error) => {
        console.log(error);
      }
    )
  }

  addPG_2yearList(PG_2yearList: any,PG_2year_Input:any) {
    
      if (PG_2year_Input.AcademicYear != "" && PG_2year_Input.firstYearStudentIntakeCount != ""
      && PG_2year_Input.firstYearStudentAdmittedCount != ""  && PG_2year_Input.studentGraduatedInMinTimeCount != "" 
      && PG_2year_Input.studentPlacedCount != "" && PG_2year_Input.medianSalaryOfPlacedStudentCount != ""
       && PG_2year_Input.studentSelectedForHigerStudiesCount != "") {

      this.PG_2yearList.push(PG_2year_Input);
      this.ugPgService.addPG_2yearList(PG_2yearList).subscribe(
        (data) => {
          console.warn("UG 4 year Adding : ", PG_2yearList);
          this.successMsg = "Data Inserted"
          setTimeout(() => { this.successMsg = ""; }, 7000);
          this.PG_2yearList = PG_2yearList;
          this.getPG_2yearListFromService();
        }, (error) => {
          console.log(error);
          this.errorMsg = "Something is wrong"
        });
    }

    if (PG_2year_Input.AcademicYear == "" && PG_2year_Input.firstYearStudentIntakeCount == ""
      && PG_2year_Input.firstYearStudentAdmittedCount == "" && PG_2year_Input.studentGraduatedInMinTimeCount == "" 
      && PG_2year_Input.studentPlacedCount == ""  && PG_2year_Input.medianSalaryOfPlacedStudentCount == ""
       && PG_2year_Input.studentSelectedForHigerStudiesCount == "") {

      this.ugPgService.addPG_2yearList(PG_2yearList).subscribe(
        (data) => {
          console.warn("UG 4 year Adding : ", PG_2yearList);
          this.successMsg = "Data Inserted"
          setTimeout(() => { this.successMsg = ""; }, 7000);
          this.PG_2yearList = PG_2yearList;
          this.getPG_2yearListFromService();
        }, (error) => {
          console.log(error);
          this.errorMsg = "Something is wrong"
        });
    }
  }

  onPG_2yearEdit(item: any, attribute: any) {
    this.PG_2yearList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;

  }
  onPG_2yearClose(item: any) {
    item.enableEdit = "";
  }

  previous() {
    $('#ugpg-tab').removeClass('active');
    $('#ugpg-tab-pane').removeClass('active');
    $('#ugpg-tab-pane').removeClass('show');
    $('#intake-tab').addClass('active');
    $('#intake-tab').removeClass('disabled');
    $('#intake-tab-pane').addClass('active');
    $('#intake-tab-pane').addClass('show');

  }
  saveandnext() {
    //alert("click me")
    $('#ugpg-tab').removeClass('active');
    $('#ugpg-tab-pane').removeClass('active');
    $('#ugpg-tab-pane').removeClass('show');
    $('#phd-tab').addClass('active');
    $('#phd-tab').removeClass('disabled');
    $('#phd-tab-pane').addClass('active');
    $('#phd-tab-pane').addClass('show');
  }

}
