import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http:HttpClient) { }

  public getCapitalExpenditureAmountList(){
    return this.http.get(`${helper.loginUrl}/capitalExpenditureAmount/getList`);;
  }

  public addCapitalExpenditureAmountList(capitalExpenditureAmountList:any){
    return this.http.post(`${helper.loginUrl}/capitalExpenditureAmount/addList`,capitalExpenditureAmountList);;
  }
  

  public getOperationExpenditureAmountList(){
    return this.http.get(`${helper.loginUrl}/operationExpenditureAmount/getList`);;
  }

  public addOperationExpenditureAmountList(operationExpenditureAmountList:any){
    return this.http.post(`${helper.loginUrl}/operationExpenditureAmount/addList`,operationExpenditureAmountList);;
  }
  
}
