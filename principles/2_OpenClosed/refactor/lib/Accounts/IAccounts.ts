import { EmployeeModel } from '../Models/EmployeeModel';
import { IApplicantModel } from '../Models/IApplicantModel';

export interface IAccounts {
  create(person: IApplicantModel): EmployeeModel;
}