import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import baseUrl from 'src/app/service/helper';

@Component({
  selector: 'app-institute-dashboard',
  templateUrl: './institute-dashboard.component.html',
  styleUrls: ['./institute-dashboard.component.css']
})
export class InstituteDashboardComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private http: HttpClient) { }


  public getList() {
    return this.http.get(`${baseUrl}/sactionApprovedIntake/getList/`);;
  }
}
