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
// import ISubscription.
import { ISubscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/employee/employeeCode.component.html',
    styleUrls: ['app/employee/employeeCode.component.css']
})

export class EmployeeCodeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';
    retryCount: number = 1;
    // Create a class property of type ISubscription
    // The ISubscription interface has closed property
    // The ngIf directive in the HTML binds to this property
    // Go to the difinition of ISubscription interface to
    // see the closed property
    subscription: ISubscription;

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];

        this.subscription = this._employeeService.getEmployeesByCode(empCode)
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

    // This method is bound to the click event of the "Cancel Request" button
    // Notice we are using the unsubscribe() method of the subscription object
    // to unsubscribe from the observable to cancel the request. We are also
    // setting the status message property of the class to "Request Cancelled"
    // This message is displayed to the user to indicate that the request is cancelled
    onCancelButtonClick(): void {
        this.statusMessage = 'Request cancelled';
        this.subscription.unsubscribe();
    }

}