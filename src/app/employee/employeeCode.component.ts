import { Component, OnInit } from "@angular/core";
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// Import rxjs retry operator
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

@Component({
    templateUrl: 'app/employee/employeeCode.component.html',
    styleUrls: ['app/employee/employeeCode.component.css']
})

export class EmployeeCodeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];

        this._employeeService.getEmployeesByCode(empCode)
            // Chain the retry operator to retry on error.
            //.retry()
            // Retry only 3 times if there is an error
            //.retry(3)
            // Retry with a delay of 1000 milliseconds (i.e 1 second)
            //.retryWhen((err)=>err.delay(1000))
            // Retry 5 times maximum with a delay of 1 second between each retry attempt
            .retryWhen((err) => {
                return err.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying ...Attempt#' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe(
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
        // this._employeeService.getEmployeeByCodePromise(empCode)
        //     .then((employeeData) => {
        //         if (employeeData == null) {
        //             this.statusMessage =
        //                 'Employee with the specified Employee Code does not exist';
        //         }
        //         else {
        //             this.employee = employeeData;
        //         }
        //     }).catch((error) => {
        //         this.statusMessage =
        //             'Problem with the service. Please try again after sometime';
        //         console.error(error);
        //     });

    }
    onBackButtonClick() {
        this._router.navigate(['/employees']);
    }

}