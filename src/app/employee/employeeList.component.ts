import { Component } from '@angular/core';
// Import EmployeeService
import { EmployeeService } from './employee.service'
import { IEmployee } from './employee';
// Import OnInit Life Cycle Hook interface
import { OnInit } from '@angular/core'
import { UserPreferencesService } from './userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    // Register EmployeeService in this component by
    // declaring it in the providers array
    //providers: [UserPreferencesService]
})

// Make the class implement OnInit interface
export class EmployeeListComponent implements OnInit {

    // employees: any[];
    employees: IEmployee[];

    // The view template will bind to this property to display
    // "Loading data. Please wait..." message when the data is
    // being loaded. If there is an error the second arrow
    // function in the subscribe method sets this property to
    // "Problem with the service. Please try again after sometime"
    statusMessage: string = 'Loading data. Please wait...';
    // private _userPreferencesService: UserPreferencesService;

    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    constructor(private _employeeService: EmployeeService, private _userPreferencesService: UserPreferencesService) {
        // this.employees = [
        //     {
        //         code: 'emp101', nam: 'Tom', gender: 'Male',
        //         annualSalary: 5500, dateOfBirth: '6/25/1988'
        //     },
        //     {
        //         code: 'emp102', name: 'Alex', gender: 'Male',
        //         annualSalary: 5700.95, dateOfBirth: '9/6/1982'
        //     },
        //     {
        //         code: 'emp103', name: 'Mike', gender: 'Male',
        //         annualSalary: 5900, dateOfBirth: '12/8/1979'
        //     },
        //     {
        //         code: 'emp104', name: 'Mary', gender: 'Female',
        //         annualSalary: 6500.826, dateOfBirth: '10/14//1980'
        //     },
        // ];
        // this.employees = _employeeService.getEmployees();
        //this._userPreferencesService = new UserPreferencesService();
    }

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }

    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    ngOnInit(): void {
        //this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployees().subscribe((employeesData) => this.employees = employeesData,
            (error) => {
                console.error(error);
                this.statusMessage = 'Problem with the service. Please try again after sometime';
            });
    }

    getEmployees(): void {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '6/25/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '/12/15/1982'
            },
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }
    getMaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Male").length;
    }
    getFemaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Female").length;
    }

    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';

    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

}
