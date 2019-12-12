import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { employeeTitle } from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';
import { EmployeeCodeComponent } from './employee/employeeCode.component';
import { EmployeeService } from './employee/employee.service';
import { UserPreferencesService } from './employee/userPreferences.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:code', component: EmployeeCodeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, EmployeeComponent,
    EmployeeListComponent, employeeTitle,
    employeeCountComponent, SimpleComponent, HomeComponent, PageNotFoundComponent, EmployeeCodeComponent],
  bootstrap: [AppComponent],
  providers: [EmployeeService, UserPreferencesService]
})
export class AppModule { }
