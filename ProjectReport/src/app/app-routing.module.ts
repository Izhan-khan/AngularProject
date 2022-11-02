import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {provideRouter } from '@angular/router';
import { IntakeComponent } from './components/intake/intake.component';
import { ReportOverallComponent } from './components/report-overall/report-overall.component';
import { InstituteDashboardComponent } from './components/institute-dashboard/institute-dashboard.component';
import { UniversityDashboardComponent } from './components/university-dashboard/university-dashboard.component';
import { UniversityComponent } from './components/university/university.component';

const routes:Routes = [      
  { path: '', redirectTo: 'login' ,pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'ConfigManager', component: IntakeComponent, pathMatch: 'full' },
  { path: 'Merge', component: ReportOverallComponent, pathMatch: 'full' },
  { path: 'instituteDashboard', component: InstituteDashboardComponent, pathMatch: 'full' },
  { path: 'universityDashboard', component: UniversityDashboardComponent, pathMatch: 'full' },
  { path: 'universityLogin', component: UniversityComponent, pathMatch: 'full' },
 
];
export  const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
