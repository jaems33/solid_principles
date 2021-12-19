export interface IPerson {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

export class Person implements IPerson {
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
  set firstName(str: string){
    this._firstName = str;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(str: string){
    this._lastName = str;
  }
  get emailAddress() {
    return this._emailAddress;
  }
  set emailAddress(str: string){
    this._emailAddress = str;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(str: string){
    this._phoneNumber = str;
  }
}