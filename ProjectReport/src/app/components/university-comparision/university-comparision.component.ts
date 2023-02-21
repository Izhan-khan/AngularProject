import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/service/university/university.service';

@Component({
  selector: 'app-university-comparision',
  templateUrl: './university-comparision.component.html',
  styleUrls: ['./university-comparision.component.css']
})
export class UniversityComparisionComponent implements OnInit {

  public university: any = {
    uId: "",
    password: "",
    token:""
  }

  universityList:any;
  collegeList:any;

  constructor(private universityService : UniversityService) { 
    this.university=JSON.parse(sessionStorage.getItem('universityObj')!);
  }


  ngOnInit(): void {

    this.getUniversityNames();
    this.getCollegeNames();
  }

  getUniversityNames(){
    this.universityService.getUniversityNamesList().subscribe(
      (data) => {
        this.universityList = data;
        console.log(this.universityList);
      }, (error) => {
        console.log(error);
      }
    )
  }
  getCollegeNames(){
    this.universityService.getCollegeNameListByUniversityId(this.university.universityId).subscribe(
      (data) => {
        this.collegeList = data;
        console.log(this.collegeList);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
