import { Component, OnInit } from '@angular/core';
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


  public UG_4yearList: any;
  public PG_2yearList: any;
  public academicYearList :any;

  constructor(private ugPgService: UgPgService) { }

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
      (data)=>{
        this.academicYearList=data;
        console.log(data);
        
      },(error)=>{
        console.log(error);
      }
    );
  }

  public getUG_4yearListFromService() {
    this.ugPgService.getUG_4yearList().subscribe(
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

  addUG_4yearList(UG_4yearList: any) {
    this.ugPgService.addUG_4yearList(UG_4yearList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getUG_4yearListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg = "Something is wrong"
      });
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
    this.ugPgService.getPG_2yearList().subscribe(
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

  addPG_2yearList(PG_2yearList: any) {
    this.ugPgService.addPG_2yearList(PG_2yearList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getPG_2yearListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg = "Something is wrong"
      });
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

  previous(){
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
