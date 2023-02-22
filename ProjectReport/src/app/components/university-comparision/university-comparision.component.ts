import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/service/university/university.service';
import { FormsModule } from '@angular/forms';

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
  }


  ngOnInit(): void {

    this.getUniversityNames();
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
  getCollegeNames(university_id:string){
    // console.log(university_id);
    this.universityService.getCollegeNameListByUniversityId(university_id).subscribe(
      (data) => {
        this.collegeList = data;
        console.log(this.collegeList);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
