import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-dashboard',
  templateUrl: './institute-dashboard.component.html',
  styleUrls: ['./institute-dashboard.component.css']
})
export class InstituteDashboardComponent implements OnInit {

   userName:any ="";
   logoutMsg="";

  
  ngOnInit(): void {
    this.userName = sessionStorage.getItem("userName");
  }

  constructor(private router: Router) { }

  public logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(['login']); 

  }



}
