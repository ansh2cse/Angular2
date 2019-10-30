import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent {
  name: string = 'Angular 2! demostration';
  address: string = 'Gurgaon';
  phone: number = 98731311;
  gender: number = 1;  
  city: string = 'Delhi';  
}
