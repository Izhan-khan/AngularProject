import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import { UniversityService } from 'src/app/service/university/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  public university: any = {
    uId: "",
    password: "",
    token:""
  }

  errorMsg = new String();  

  universityLoginForm: any;
  universityNameList:any;

  constructor(private router: Router, private route: ActivatedRoute, private universityService : UniversityService) { }

  ngOnInit(): void {

    this.getUniversityNames();

    this.universityLoginForm = new FormGroup({
      'uId': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required])
    })

    sessionStorage.setItem("token",this.university.token)
  }

  get uId() {
    return this.universityLoginForm.get('uId');
  }
  get password() {
    return this.universityLoginForm.get('password');
  }


  getUniversityNames(){
    this.universityService.getUniversityNamesList().subscribe(
      (data) => {
        this.universityNameList = data;
        console.log(this.universityNameList);
        
      }, (error) => {
        console.log(error);
      }
    )
  }


  public universityLogin() {

    console.log(this.university)
    
    if (this.university.uId != "" || this.university.password != "") {
      if (this.universityLoginForm.valid) {
        this.universityService.authenticate(this.university).subscribe(
          (data) => {
            console.log(data);
            this.university = data;
            sessionStorage.setItem("token","Bearer "+this.university.token)
            console.log("TOKEN -->"+sessionStorage.getItem("token"));
            this.router.navigate(['universityDashboard']);
          },
          (error) => {
            // user not in database or password mismatch --> 401 
            console.error(error);
            this.errorMsg="Please recheck your email & password";
          }
        );
      }
    }
  }

  
}
