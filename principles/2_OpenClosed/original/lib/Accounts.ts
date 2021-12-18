import { PersonModel } from './PersonModel';
import { EmployeeModel } from './EmployeeModel';

export class Accounts {
  static create(person: PersonModel){
    return new EmployeeModel({
      firstName: person.firstName,
      lastName: person.lastName,
      email: `${person.firstName}.${person.lastName}@bigcorp.com`.toLowerCase()
    });
  }
}