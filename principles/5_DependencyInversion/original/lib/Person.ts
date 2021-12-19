export class Person {
  private _firstName: string;
  private _lastName: string;
  private _emailAddress: string;
  private _phoneNumber: string;
  constructor(firstName: string, lastName: string, emailAddress: string, phoneNumber: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._emailAddress = emailAddress;
    this._phoneNumber = phoneNumber;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get emailAddress() {
    return this._emailAddress;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
}