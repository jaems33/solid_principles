import { EmployeeModel } from '../Models/EmployeeModel';
import { IAccounts } from './IAccounts';
import { IApplicantModel } from '../Models/IApplicantModel';

export class ExecutiveAccounts implements IAccounts {
  create(person: IApplicantModel): EmployeeModel {
    return new EmployeeModel({
      firstName: person.firstName,
      lastName: person.lastName,
      email: `${person.firstName}@mgmtbigcorp.com`.toLowerCase(),
      isManager: true,
      isExecutive: true,
    })
  }
}