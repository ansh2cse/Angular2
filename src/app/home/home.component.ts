import { Component } from '@angular/core'
import { UserPreferencesService } from '../employee/userPreferences.service'

// Notice the colour property is bound to the textbox using angular two-way
// databinding. We are also using style binding to set the background colour
// of the textbox
@Component({
    template: `<h1>This is the home page</h1>
               <input type="text" [(ngModel)] = "colour" [style.background]="colour"> `
})

export class HomeComponent {
    // Create a private variable to hold an instance of the UserPreferencesService
    // private _userPreferencesService: UserPreferencesService

    // In the constructor we are creating an instance of the UserPreferencesService
    // using the new keyword. So this instance is local to this component and we
    // cannot use it share data with other components. Later we will modify this
    // code to use dependency injection, which creates a Singleton so the colour
    // data can be shared with other components.
    constructor(private _userPreferencesService: UserPreferencesService) {
        //this._userPreferencesService = new UserPreferencesService();
    }

    // Implement a getter to retrieve the colourPreference value
    // from the service
    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    // Implement a setter to change the colourPreference value
    // of the service
    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }

}
