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
  badHtml: string = '<h4>Hello <script>alert("Hacked");</script> World</h4>';

  classesToApply: string = 'italicClass boldClass';
  applyBoldClass: boolean = false;
  applyItalicClass: boolean = true;
  isBold: boolean = false;
  fontSize: number = 20;
  userText: string = 'Pragim';

  getFullName(): string {
    return this.firstName + this.lastName;
  }

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicClass
    };
    return classes;
  }

  addStyle() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-weight': this.isBold ? 'bold' : 'normal'
    };
    return styles;
  }

  onClick(): void {
    console.log('button clicked!');
  }

}
