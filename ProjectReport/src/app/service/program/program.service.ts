import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  public getProgramFromId(id: number) {
    return this.http.get(`${helper.loginUrl}/program/getNameFromId/` + id);
  }

  public getProgramNameList() {
    return this.http.get(`${helper.loginUrl}/program/getList`);
  }
}
