import { IApplicantModel } from './IApplicantModel';
import { IAccounts } from '../Accounts/IAccounts';
import { ExecutiveAccounts } from '../Accounts/ExecutiveAccounts';

type ExecutiveModelInputs = {
  firstName: string;
  lastName: string;
  accountProcessor?: IAccounts;
}

export class ExecutiveModel implements IApplicantModel {
  _firstName: string;
  _lastName: string;
  _accountProcessor: IAccounts;
  constructor({ firstName, lastName, accountProcessor = new ExecutiveAccounts() }: ExecutiveModelInputs){
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