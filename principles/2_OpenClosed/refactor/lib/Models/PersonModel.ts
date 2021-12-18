import { Accounts } from '../Accounts/Accounts';
import { IAccounts } from '../Accounts/IAccounts';
import { IApplicantModel } from '../Models/IApplicantModel';

type PersonModelInput = {
  firstName: string;
  lastName: string;
  accountProcessor?: IAccounts;
}

export class PersonModel implements IApplicantModel {
  private _firstName: string;
  private _lastName: string;
  private _accountProcessor: IAccounts;
  constructor({ firstName, lastName, accountProcessor = new Accounts() }: PersonModelInput) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._accountProcessor = accountProcessor;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(str: string) {
    this._firstName = str;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(str: string) {
    this._lastName = str;
  }
  get accountProcessor(){
    return this._accountProcessor;
  }
  set accountProcessor(a: IAccounts){
    this._accountProcessor = a;
  }
}