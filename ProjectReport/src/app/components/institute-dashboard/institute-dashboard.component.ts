import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceComponent } from '../finance/finance.component';

@Component({
  selector: 'app-institute-dashboard',
  templateUrl: './institute-dashboard.component.html',
  styleUrls: ['./institute-dashboard.component.css']
})
export class InstituteDashboardComponent implements OnInit {

   userName:any ="";
   logoutMsg="";
   disabledReport :boolean= true;

  //  @ViewChild('financeComponent')
  // financeComponent!: FinanceComponent;

  // activateReport=this.financeComponent.activateReport|| false;
  
  ngOnInit(): void {
    this.userName = sessionStorage.getItem("userName");
  }

  constructor(private router: Router) { 
  }

  onMessageReceived(message: boolean) {
    this.disabledReport=message;
    console.log(message);
    }

  public logout() {
    sessionStorage.removeItem("token");
    sessionStorage.setItem("logoutMessage",this.logoutMsg="Successfully Logout");
    this.router.navigate(['login']); 

  }



}
