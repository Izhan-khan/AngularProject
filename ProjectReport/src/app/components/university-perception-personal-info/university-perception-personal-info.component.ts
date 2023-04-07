import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-perception-personal-info',
  templateUrl: './university-perception-personal-info.component.html',
  styleUrls: ['./university-perception-personal-info.component.css']
})
export class UniversityPerceptionPersonalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public personalInfo:any={
    name:"",
    subjectArea:"",
    state:"",
    email:"",
    city:"",
    mobile:"",
    interest:"",
    interestDescription:"",
    research:"",
    teaching:"",
    administration:"",
    others:"",
  }

  public submit(input:any){
    this.personalInfo=input;
    console.log(this.personalInfo); 
  }










































  private selectedLink: string = "";

  setRadio(string: string): void {
    this.selectedLink = string;
  }
  activateInput(): String {
    if (this.selectedLink === "Student") {
      return 'Student';
    } if (this.selectedLink === "Parent/Gaurdian") {
      return 'Parent/Gaurdian';
    } if (this.selectedLink === "Faculty") {
      return 'Faculty';
    } if (this.selectedLink === "Alumi") {
      return 'Alumi';
    } if (this.selectedLink === "Administrator") {
      return 'Administrator';
    } if (this.selectedLink === "NGO") {
      return 'NGO';
    } if (this.selectedLink === "Funding Agency") {
      return 'Funding Agency';
    } if (this.selectedLink === "Social Worker") {
      return 'Social Worker';
    } if (this.selectedLink === "HR Head") {
      return 'HR Head';
    } if (this.selectedLink === "Other") {
      return 'Other';
    }
    return "";
  }

}
