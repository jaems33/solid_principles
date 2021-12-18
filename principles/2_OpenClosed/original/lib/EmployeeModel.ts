type EmployeeModelInput = {
  firstName: string;
  lastName: string;
  email: string;
}

export class EmployeeModel {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  constructor({ firstName, lastName, email }: EmployeeModelInput) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
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
}