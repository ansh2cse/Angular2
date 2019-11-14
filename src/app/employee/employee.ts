
export interface IEmployee {
    code: string,
    name: string,
    gender: string,
    annualSalary: number,
    dateOfBirth: string,
    // To make a property optional use a ?
    // A class that implements this interface need
    // not provide implementation for this property
    department?: string;

    computeMonthlySalary(annualSalary: number): number;

}

export class Employee implements IEmployee {

    // All the interface mandatory properties are defined 
    // code: string;
    // name: string;
    // gender: string;
    // annualSalary: number;
    // dateOfBirth: string;

    // The above class properties are then initialized
    // using the constructor parameters. To do something
    // like this, TypeScript has a shorthand syntax which
    // reduces the amount of code we have to write
    constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: string) {

    }

    computeMonthlySalary(annualSalary: number): number {
        return annualSalary / 12;
    }
}