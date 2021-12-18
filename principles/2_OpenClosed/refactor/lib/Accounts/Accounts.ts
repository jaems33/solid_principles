import { PersonModel } from '../Models/PersonModel';
import { EmployeeModel } from '../Models/EmployeeModel';
import { IApplicantModel } from '../Models/IApplicantModel';
import { IAccounts } from './IAccounts';

export class Accounts implements IAccounts {
  create(person: IApplicantModel){
    return new EmployeeModel({
      firstName: person.firstName,
      lastName: person.lastName,
      email: `${person.firstName}.${person.lastName}@bigcorp.com`.toLowerCase(),
    });
  }
}