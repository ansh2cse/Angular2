import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { employeeTitle } from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './employee/employeeCount.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, employeeTitle, employeeCountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
