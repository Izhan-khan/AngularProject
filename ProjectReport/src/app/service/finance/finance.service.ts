import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http:HttpClient) { }

  public getCapitalExpenditureAmountList(){
    return this.http.get(`${baseUrl}/capitalExpenditureAmount/getList`);;
  }

  public addCapitalExpenditureAmountList(capitalExpenditureAmountList:any){
    return this.http.post(`${baseUrl}/capitalExpenditureAmount/addList`,capitalExpenditureAmountList);;
  }
  

  public getOperationExpenditureAmountList(){
    return this.http.get(`${baseUrl}/operationExpenditureAmount/getList`);;
  }

  public addOperationExpenditureAmountList(operationExpenditureAmountList:any){
    return this.http.post(`${baseUrl}/operationExpenditureAmount/addList`,operationExpenditureAmountList);;
  }
  
}
