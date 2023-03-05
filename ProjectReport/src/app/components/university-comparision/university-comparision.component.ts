import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/service/university/university.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-university-comparision',
  templateUrl: './university-comparision.component.html',
  styleUrls: ['./university-comparision.component.css']
})
export class UniversityComparisionComponent implements OnInit {

  public university: any = {
    uId: "",
    password: "",
    token: ""
  }

  public comparisionData: any = {
    //login university and institute
    loginUniversity: "",loginInstitute: "",
    //Comparing university and institute
    university: "",institute: "",
    // Intake programId
    programId: "",
    // PhD programTimeId
    programTimeId:"",
    // Research researchDetailsId
    researchDetailsId:"",
    // Component & module
    component:"", module:""
  }
  

  chart: any;
  hideChart = true;
  universityList: any;
  collegeList: any;
  moduleList:any;
  loginCollegeList: any;
  comparingInstituteList: any;

  componentsAndModules: Array<any> = [
		{ component: 'Intake', module: [ 'Saction Intake','Total Students' ] },
		{ component: 'U.G & P.G', module: ['U.G','P.G' ] },
		{ component: 'Ph.D', module: ['Persuing','Graduated' ] },
		{ component: 'Research', module: ['Sponsored Research','Consultancy Project' ]},
		{ component: 'Finance', module: [ 'Capital expenditure','Capital expenditure']},
	];

  constructor(private universityService: UniversityService) {
  }


  ngOnInit(): void {
    this.comparisionData.loginUniversity = JSON.parse(sessionStorage.getItem('universityObj')!);
    // console.log("university Obj ", this.comparisionData.loginUniversity);
    this.getUniversityNames();
    this.getLoginCollege();
  }

  changeModule(component: any) { 
    // console.warn(this.componentsAndModules.find((m: any) => m.component == component).module);
		this.moduleList= this.componentsAndModules.find((m: any) => m.component == component).module; 
	}

  getUniversityNames() {
    this.universityService.getUniversityNamesList().subscribe(
      (data) => {
        this.universityList = data;
        // console.log(this.universityList);
      }, (error) => {
        console.log(error);
      }
    )
  }
  getCollegeNames(university_id: string) {
    // console.log(university_id);
    this.universityService.getCollegeListByUniversityId(university_id).subscribe(
      (data) => {
        this.collegeList = data;
        // console.log(this.collegeList);
      }, (error) => {
        console.log(error);
      }
    )
  }
  getLoginCollege() {
    // console.log(university_id);
    this.universityService.getCollegeListByUniversityId(this.comparisionData.loginUniversity.universityId).subscribe(
      (data) => {
        this.loginCollegeList = data;
        // console.log(this.loginCollegeList);
      }, (error) => {
        console.log(error);
      }
    )
  }

  compareInstitute(comparisionData: any) {

    console.warn(comparisionData);
    
    // Saction Intake
    if(comparisionData.module== 'Saction Intake'){
      
      this.universityService.compareInstituteByIntake(
      comparisionData.loginUniversity.universityId,
      comparisionData.loginInstitute,
      comparisionData.university,
      comparisionData.institute,
      comparisionData.programId)
      .subscribe(
        (data) => {
          this.comparingInstituteList = data;
          console.log('comparing institute data : ', this.comparingInstituteList);
          console.warn(this.comparingInstituteList[0][0].length);
          let xValues = ['2015-16 count', '2016-17 count', '2017-18 count', '2018-19 count', '2019-20 count', '2020-21 count'];
          this.generateChart(this.comparingInstituteList,xValues);
        }, (error) => {
          console.log(error);
        }
      )}

      // Total Students 
      if(comparisionData.module== 'Total Students'){
      
        this.universityService.compareInstituteByTotalStudents(
        comparisionData.loginUniversity.universityId,
        comparisionData.loginInstitute,
        comparisionData.university,
        comparisionData.institute,
        comparisionData.programId)
        .subscribe(
          (data) => {
            this.comparingInstituteList = data;
            console.log('comparing institute data : ', this.comparingInstituteList);
            let xValues = ['Number of male students','No of female student','Total students','Within state','Outside state','Outside country','Economically backward','Socially challenged','Recieved fee from state and central government','Recieved fee from institutional funds','Recieved fee from private bodies','Not Recieved any fee reimbursement'];
            this.generateChart(this.comparingInstituteList,xValues);
          }, (error) => {
            console.log(error);
          }
        )}

        //Phd Persuing
        if(comparisionData.module== 'Persuing'){
      
          this.universityService.compareInstituteByPhdPersuing(
          comparisionData.loginUniversity.universityId,
          comparisionData.loginInstitute,
          comparisionData.university,
          comparisionData.institute,
          comparisionData.programTimeId)
          .subscribe(
            (data) => {
              this.comparingInstituteList = data;
              console.log('comparing institute data : ', this.comparingInstituteList);
              // console.warn(this.comparingInstituteList[0][0].length);
              let xValues = ['Total students count '];
              this.generateChart(this.comparingInstituteList,xValues);
            }, (error) => {
              console.log(error);
            }
          )}
    
          // Phd Graduated
          if(comparisionData.module== 'Graduated'){
          
            this.universityService.compareInstituteByPhdGraduated(
            comparisionData.loginUniversity.universityId,
            comparisionData.loginInstitute,
            comparisionData.university,
            comparisionData.institute,
            comparisionData.programTimeId)
            .subscribe(
              (data) => {
                this.comparingInstituteList = data;
                console.log('comparing institute data : ', this.comparingInstituteList);
                // console.warn(this.comparingInstituteList[0][0].length);
                let xValues = ['2018-19 count', '2019-20 count', '2020-21 count'];
                this.generateChart(this.comparingInstituteList,xValues);
              }, (error) => {
                console.log(error);
              }
            )}

        // Sponsored Research module
        if(comparisionData.module== 'Sponsored Research'){
      
          this.universityService.compareInstituteBySponsoredResearch(
          comparisionData.loginUniversity.universityId,
          comparisionData.loginInstitute,
          comparisionData.university,
          comparisionData.institute,
          comparisionData.researchDetailsId)
          .subscribe(
            (data) => {
              this.comparingInstituteList = data;
              console.log('comparing institute data : ', this.comparingInstituteList);
              // console.warn(this.comparingInstituteList[0][0].length);
              let xValues = ['2018-19 count', '2019-20 count', '2020-21 count'];
              this.generateChart(this.comparingInstituteList,xValues);
            }, (error) => {
              console.log(error);
            }
          )}
    
          //  Consultancy Project module
          if(comparisionData.module== 'Consultancy Project'){
          
            this.universityService.compareInstituteByConsultingProjectResearch(
            comparisionData.loginUniversity.universityId,
            comparisionData.loginInstitute,
            comparisionData.university,
            comparisionData.institute,
            comparisionData.researchDetailsId)
            .subscribe(
              (data) => {
                this.comparingInstituteList = data;
                console.log('comparing institute data : ', this.comparingInstituteList);
                // console.warn(this.comparingInstituteList[0][0].length);
                let xValues = ['2018-19 count', '2019-20 count', '2020-21 count'];
                this.generateChart(this.comparingInstituteList,xValues);
              }, (error) => {
                console.log(error);
              }
            )}
        
      
  }

  generateChart(comparingInstituteList: any,xValues:any[] ) {

    if (this.chart) {
      this.chart.destroy();
    }
    this.hideChart = false;

        let loginCollegeData = new Array;
    for (let i = 1; i < comparingInstituteList[0][0].length - 1; i++) {
      loginCollegeData.push(comparingInstituteList[0][0][i]);
    }
    console.log('login college data: ',loginCollegeData);

    let comparingCollegeData = new Array;
    for (let i = 1; i < comparingInstituteList[1][0].length - 1; i++) {
      comparingCollegeData.push(comparingInstituteList[1][0][i]);
    }
    console.log('comparing college data : ',comparingCollegeData);

    this.chart = new Chart("comparisionChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            label: comparingInstituteList[0][0][comparingInstituteList[1][0].length - 2],
            data: loginCollegeData,
            backgroundColor: '#EC7063',
            borderColor: "#78281F",
            // barThickness: 40,
            // maxBarThickness: 50
          }, {
            label: comparingInstituteList[1][0][comparingInstituteList[1][0].length - 2],
            data: comparingCollegeData,
            backgroundColor: '#3498DB',
            borderColor: "#1B4F72",
            // barThickness: 40,
            // maxBarThickness: 50,
          }
        ]
      },
      options: {


      }
    });
  }


}
