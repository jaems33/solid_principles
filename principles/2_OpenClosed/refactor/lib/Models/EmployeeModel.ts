type EmployeeModelInput = {
  firstName: string;
  lastName: string;
  email: string;
  isManager?: boolean;
  isExecutive?: boolean;
}

export class EmployeeModel {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _isManager: boolean;
  private _isExecutive: boolean;
  constructor({ firstName, lastName, email, isManager=false, isExecutive=false }: EmployeeModelInput) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._isManager = isManager;
    this._isExecutive = isExecutive;
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
  get email() {
    return this._email;
  }
  set email(str: string) {
    this._email = str;
  }
  get isManager() {
    return this._isManager;
  }
  set isManager(state: boolean) {
    this.isManager = state;
  }
  get isExecutive() {
    return this._isExecutive;
  }
  set isExecutive(state: boolean) {
    this.isExecutive = state;
  }
}