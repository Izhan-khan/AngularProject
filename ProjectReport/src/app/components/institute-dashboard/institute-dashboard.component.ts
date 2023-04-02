import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceComponent } from '../finance/finance.component';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-institute-dashboard',
  templateUrl: './institute-dashboard.component.html',
  styleUrls: ['./institute-dashboard.component.css']
})
export class InstituteDashboardComponent implements OnInit {

   userName:any ="";
   logoutMsg="";
   disabledReport :boolean= true;
   college:any;

  //  @ViewChild('financeComponent')
  // financeComponent!: FinanceComponent;

  // activateReport=this.financeComponent.activateReport|| false;
  
  ngOnInit(): void {
  }

  constructor(private router: Router,private loginService:LoginService) { 
    this.userName = sessionStorage.getItem("userName");
    this.getInstituteDetailsByCollegeId(this.userName);
  }

  public getInstituteDetailsByCollegeId(collegeId:any){
    this.loginService.getInstituteDetailsByCollegeId(collegeId).subscribe(
      (data)=>{
        this.college = data;
        sessionStorage.setItem('instituteObj',JSON.stringify(this.college));
        console.log("institute Obj : ", JSON.parse(sessionStorage.getItem('instituteObj')|| '{}'));
      },
      (error)=>{
        console.error(error);
      }
    )
  }

  onMessageReceived(message: boolean) {
    this.disabledReport=message;
    console.log(message);
    }

  public logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    sessionStorage.setItem("logoutMessage",this.logoutMsg="Successfully Logout");
    this.router.navigate(['login']); 

  }



}
