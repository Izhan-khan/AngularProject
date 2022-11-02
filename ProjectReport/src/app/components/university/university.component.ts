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
    name: "",
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
      'name': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required])
    })

    sessionStorage.setItem("token",this.university.token)
  }

  get name() {
    return this.universityLoginForm.get('username');
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
    
    if (this.university.name != "" || this.university.password != "") {
      if (this.universityLoginForm.valid) {
        this.universityService.authenticate(this.university).subscribe(
          (data) => {
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
