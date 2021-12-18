import { PersonModel } from './PersonModel';
import { EmployeeModel } from './EmployeeModel';
import { EmployeeType } from './Enums';

export class Accounts {
  static create(person: PersonModel){
    return new EmployeeModel({
      firstName: person.firstName,
      lastName: person.lastName,
      email: `${person.firstName}.${person.lastName}@bigcorp.com`.toLowerCase(),
      isManager: person.employeeType === EmployeeType.Manager || person.employeeType === EmployeeType.Executive,
      isExecutive: person.employeeType === EmployeeType.Executive,
    });
  }
}