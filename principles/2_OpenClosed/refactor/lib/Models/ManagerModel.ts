import { IAccounts } from '../Accounts/IAccounts';
import { IApplicantModel } from '../Models/IApplicantModel';
import { ManagerAccounts } from '../Accounts/ManagerAccounts';

type ManagerModelInputs = {
  firstName: string;
  lastName: string;
  accountProcessor?: IAccounts;
}

export class ManagerModel implements IApplicantModel {
  _firstName: string;
  _lastName: string;
  _accountProcessor: IAccounts;
  constructor({ firstName, lastName, accountProcessor = new ManagerAccounts() }: ManagerModelInputs){
    this._firstName = firstName;
    this._lastName = lastName;
    this._accountProcessor = accountProcessor;
  }
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get accountProcessor(){
    return this._accountProcessor;
  }
}