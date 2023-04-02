import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { FinanceService } from 'src/app/service/finance/finance.service';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})

export class FinanceComponent implements OnInit {
  public chart: any;

  @Output() disabledReport: EventEmitter<boolean> = new EventEmitter<boolean>();

  successMsg = new String();
  errorMsg = new String();

  public institute:any;
  public CapitalExpenditureAmountList :any;
  public OperationExpenditureAmountList :any;
  
  
  constructor(private financeService:FinanceService) { 
    this.institute=JSON.parse(sessionStorage.getItem('instituteObj')!);
  }

  ngOnInit(): void {
    //this.createChart();
    this.getCapitalExpenditureAmountListFromService();
    this.getOperationExpenditureAmountListFromService();
  
  }

  public getCapitalExpenditureResources(id: number) {
    return this.financeService.getCapitalExpenditureResources(id);
  }
 
  public getCapitalExpenditureAmountListFromService(){
    this.financeService.getCapitalExpenditureAmountList(this.institute.collegeId).subscribe(
      (data)=>{
        this.CapitalExpenditureAmountList=data;
        
        this.CapitalExpenditureAmountList.forEach((element: any) => {
          this.getCapitalExpenditureResources(element.financialResources).subscribe(
            (data: any) => {
              element.financialResources = data.name;
            }, (error) => {
              console.log(error);
            }
          );
        })
        
        console.log("Capital Expenditure Amount List: ", this.CapitalExpenditureAmountList);
      },(error)=>{
        console.log(error);
      }
    )    
  }
  onCapitalExpenditureAmountEdit(item: any, attribute: any) {
    this.CapitalExpenditureAmountList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;

  }
  onCapitalExpenditureAmountClose(item: any) {
    item.enableEdit = "";
  }
  addCapitalExpenditureAmountList(capitalExpenditureAmountList: any) {
    this.financeService.addCapitalExpenditureAmountList(capitalExpenditureAmountList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getCapitalExpenditureAmountListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg="Something is wrong"
      });
  }


  
  public getOperationExpenditureRescources(id: number) {
    return this.financeService.getOperationExpenditureRescources(id);
  }

  public getOperationExpenditureAmountListFromService(){
    this.financeService.getOperationExpenditureAmountList(this.institute.collegeId).subscribe(
      (data)=>{
        this.OperationExpenditureAmountList=data;

        this.OperationExpenditureAmountList.forEach((element: any) => {
          this.getOperationExpenditureRescources(element.financialResources).subscribe(
            (data: any) => {
              element.financialResources = data.name;
            }, (error) => {
              console.log(error);
            }
          );
        })

        console.log("Operation Expenditure Amount List: ", this.OperationExpenditureAmountList);
      },(error)=>{
        console.log(error);
      }
    )    
  }
  onOperationExpenditureAmountEdit(item: any, attribute: any) {
    this.OperationExpenditureAmountList.forEach((element: { enableEdit: any; }) => {
      element.enableEdit = false;
    });
    item.enableEdit = attribute;

  }
  onOperationExpenditureAmountClose(item: any) {
    item.enableEdit = "";
  }
  addOperationExpenditureAmountList(operationExpenditureAmountList: any) {
    this.financeService.addOperationExpenditureAmountList(operationExpenditureAmountList).subscribe(
      (data) => {
        this.successMsg = "Data Inserted"
        this.getOperationExpenditureAmountListFromService();
      }, (error) => {
        console.log(error);
        this.errorMsg="Something is wrong"
      });
  }



  saveNsubmit(){
      // this.activateReport = true;  
      this.disabledReport.emit(false);
   }






   previous(){
    $('#finance-tab').removeClass('active');
    $('#finance-tab-pane').removeClass('active');
    $('#finance-tab-pane').removeClass('show');
    $('#pcs-tab').addClass('active');
    $('#pcs-tab').removeClass('disabled');
    $('#pcs-tab-pane').addClass('active');
    $('#pcs-tab-pane').addClass('show');
  
  }









  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2020-21', '2019-20', '2018-19', ], 
	       datasets: [
          {
            label: "Region Diversity",
            data: ['467','576', '572'],
            backgroundColor: 'blue'
          },
          {
            label: "Women Diversity",
            data: ['542', '542', '536'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
