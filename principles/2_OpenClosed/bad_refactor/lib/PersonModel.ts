import { EmployeeType } from './Enums';

type PersonModelInput = {
  firstName: string;
  lastName: string;
  employeeType?: EmployeeType;
}

export class PersonModel {
  private _firstName: string;
  private _lastName: string;
  private _typeOfEmployee: EmployeeType;
  constructor({ firstName, lastName, employeeType = EmployeeType.Staff }: PersonModelInput) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._typeOfEmployee = employeeType;
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
  get employeeType(){
    return this._typeOfEmployee;
  }
  set employeeType(e: EmployeeType){
    this._typeOfEmployee = e;
  }
}