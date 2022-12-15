import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/service/university/university.service';

@Component({
  selector: 'app-university-overall',
  templateUrl: './university-overall.component.html',
  styleUrls: ['./university-overall.component.css']
})
export class UniversityOverallComponent implements OnInit {

  university :any;

  constructor(private universityService:UniversityService) { }

  ngOnInit(): void {
    this.university=JSON.parse(sessionStorage.getItem('universityObj')!);
    // console.log(this.university);
  }



}
