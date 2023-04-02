import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http:HttpClient) { }


 
  public getCapitalExpenditureResources(id:any){
    return this.http.get(`${helper.loginUrl}/capitalExpenditureRescources/`+id);;
  }

  public getOperationExpenditureRescources(id:any){
    return this.http.get(`${helper.loginUrl}/operationExpenditureRescources/`+id);;
  }

  
  public getCapitalExpenditureAmountList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/capitalExpenditureAmount/getList/`+instituteId);;
  }

  public addCapitalExpenditureAmountList(capitalExpenditureAmountList:any){
    return this.http.post(`${helper.loginUrl}/capitalExpenditureAmount/addList`,capitalExpenditureAmountList);;
  }
  

  public getOperationExpenditureAmountList(instituteId:any){
    return this.http.get(`${helper.loginUrl}/operationExpenditureAmount/getList/`+instituteId);;
  }

  public addOperationExpenditureAmountList(operationExpenditureAmountList:any){
    return this.http.post(`${helper.loginUrl}/operationExpenditureAmount/addList`,operationExpenditureAmountList);;
  }
  
}
