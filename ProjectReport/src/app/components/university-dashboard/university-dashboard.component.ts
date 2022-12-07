import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/service/university/university.service';

@Component({
  selector: 'app-university-dashboard',
  templateUrl: './university-dashboard.component.html',
  styleUrls: ['./university-dashboard.component.css']
})
export class UniversityDashboardComponent implements OnInit {

  logoutMsg :String ="";
  university :any;
  
  constructor(private router :Router,private universityService:UniversityService) { }

  ngOnInit(): void {
    this.getUniversityFromuId(sessionStorage.getItem('uId')!)
    this.logoutMsg =sessionStorage.getItem("logoutMessage")!;
  }

  public getUniversityFromuId(uId:any){
    this.universityService.getUniversityFromUid(uId).subscribe(
      (data)=>{
        console.log("data : " ,data);
        this.university = data;
      },
      (error)=>{
        console.error(error);
      }
    )
  }

  public logout() {
    sessionStorage.removeItem("universityToken");
    sessionStorage.removeItem("uId");
    sessionStorage.setItem("logoutMessage",this.logoutMsg="Successfully Logout");
    this.router.navigate(['universityLogin']); 

  }

}
