import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>
  // Hello {{name}}
  // </h1>`,
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  // name: string = 'Angular 2! demostration';
  // address: string = 'Gurgaon';
  // phone: number = 98731311;
  // gender: number = 1;  
  // city: string = 'Delhi';  

  pageHeader: string = 'Employee Details';
  imagePath: string = '/gmail/about/static/images/logo-gmail.png';

  firstName: string = 'Tom';
  lastName: string = 'Hanks';
  isDisabled: boolean = false;
  badHtml: string = 'Hello <script>alert("Hacked");</script> World';

  getFullName(): string {
    return this.firstName + this.lastName;
  }

}
