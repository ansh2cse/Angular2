import { Component, OnInit } from "@angular/core";
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/employee/employeeCode.component.html',
    styleUrls: ['app/employee/employeeCode.component.css']
})

export class EmployeeCodeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        debugger
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeesByCode(empCode).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage = 'Problem with the service. Please try again after sometime';
                console.error(error);
            }
        )
    }
}