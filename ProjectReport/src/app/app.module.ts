import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntakeComponent } from './components/intake/intake.component';
import { ReportOverallComponent } from './components/report-overall/report-overall.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { InstituteDashboardComponent } from './components/institute-dashboard/institute-dashboard.component';
import { UgPgComponent } from './components/ug-pg/ug-pg.component';
import { ResearchComponent } from './components/research/research.component';
import { PcsComponent } from './components/pcs/pcs.component';
import { FinanceComponent } from './components/finance/finance.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportTlrComponent } from './components/report-tlr/report-tlr.component';
import { ReportRpComponent } from './components/report-rp/report-rp.component';
import { ReportGoComponent } from './components/report-go/report-go.component';
import { ReportOiComponent } from './components/report-oi/report-oi.component';
import { InstituteComponent } from './components/institute/institute.component';
import { UniversityComponent } from './components/university/university.component';
import { UniversityDashboardComponent } from './components/university-dashboard/university-dashboard.component';
import { UniversityOverallComponent } from './components/university-overall/university-overall.component';
import { UniversityTlrComponent } from './components/university-tlr/university-tlr.component';
import { UniversityRpComponent } from './components/university-rp/university-rp.component';
import { UniversityGoComponent } from './components/university-go/university-go.component';
import { UniversityOiComponent } from './components/university-oi/university-oi.component';
import { UniversityInstituteOiComponent } from './components/university-institute-oi/university-institute-oi.component';
import { UniversityInstituteGoComponent } from './components/university-institute-go/university-institute-go.component';
import { UniversityInstituteRpComponent } from './components/university-institute-rp/university-institute-rp.component';
import { UniversityInstituteTlrComponent } from './components/university-institute-tlr/university-institute-tlr.component';
import { UniversityInstituteOverallComponent } from './components/university-institute-overall/university-institute-overall.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './service/authInterceptor/auth-interceptor.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhdComponent } from './components/phd/phd.component';
import { TestTabComponent } from './components/test-tab/test-tab.component';
import { NumberToWordsPipe } from './pipe/numberToWords/number-to-words.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    IntakeComponent,
    ReportOverallComponent,
    LoginComponent,
    InstituteDashboardComponent,
    UgPgComponent,
    ResearchComponent,
    PcsComponent,
    FinanceComponent,
    ReportsComponent,
    ReportTlrComponent,
    ReportRpComponent,
    ReportGoComponent,
    ReportOiComponent,
    InstituteComponent,
    UniversityComponent,
    UniversityDashboardComponent,
    UniversityOverallComponent,
    UniversityTlrComponent,
    UniversityRpComponent,
    UniversityGoComponent,
    UniversityOiComponent,
    UniversityInstituteOiComponent,
    UniversityInstituteGoComponent,
    UniversityInstituteRpComponent,
    UniversityInstituteTlrComponent,
    UniversityInstituteOverallComponent,
    PhdComponent,
    TestTabComponent,
    NumberToWordsPipe,
     
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgxPaginationModule,
  
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
