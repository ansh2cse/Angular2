// Step 1 : Import OnChanges and SimpleChanges
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
// The selector "simple" will be used as the directive
// where we want to use this component. Notice we are
// also using the simpleInput property with interpolation
// to display the value it receives from the parent
// component
@Component({
    selector : 'simple',
    template: `You entered : {{simpleInput}}`
})
// Step 2 : Implement OnChanges Life Cycle Hook interface
export class SimpleComponent implements OnChanges {        
     // Input property. As and when this property changes
    // ngOnChanges life cycle hook method is called
    @Input() simpleInput : string;
    
     // Step 3 : Implementation for the hook method
    // This code logs the current and previous value
    // to the console.
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            var change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = '
                + current + ', previousValue = ' + previous);
            // The above line can be rewritten using
            // placeholder syntax as shown below
            // console.log(`${propertyName}: currentValue
            // = ${current }, previousValue = ${previous }`);
        }
    }
   
} 