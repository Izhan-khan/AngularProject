import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/service/university/university.service';

@Component({
  selector: 'app-university-institute-overall',
  templateUrl: './university-institute-overall.component.html',
  styleUrls: ['./university-institute-overall.component.css']
})
export class UniversityInstituteOverallComponent implements OnInit {

  public college: any = {
    cId: "",
    collegeName: ""
  }

  collegeNameList: any;
  university: any;
  constructor(private universityService : UniversityService) { }

  ngOnInit(): void {
    this.university=JSON.parse(sessionStorage.getItem('universityObj')!);
    this.getUniversityNames();
  }


  getUniversityNames(){
    this.universityService.getCollegeNameListByUniversityId(this.university.universityId).subscribe(
      (data) => {
        this.collegeNameList = data;
      }, (error) => {
        console.log(error);
      }
    )
  }
}
