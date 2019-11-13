import { Component } from '@angular/core'

@Component({
    selector: "employee-count",
    templateUrl: "app/employee/employeeCount.component.html",
    styleUrls: ['app/employee/employeeCount.component.css']
})

export class employeeCountComponent {
    all: number = 5;
    male: number = 10;
    female: number = 5
}