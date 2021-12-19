import { IEmployee } from './IEmployee';

export abstract class BaseEmployee implements IEmployee {
  protected _firstName: string;
  protected _lastName: string;
  protected _salary: number;

  constructor(firstName='', lastName: string = '', salary=0){
    this._firstName = firstName;
    this._lastName = lastName;
    this._salary = salary;
  }
  
  calculatePerHourRate(rank: number){
    const baseAmount = 12.5;
    this._salary = baseAmount + (rank * 2);
  }

  set firstName(str: string){
    this._firstName = str
  }
  get firstName(){
    return this._firstName;
  }

  set lastName(str: string){
    this._lastName = str
  }
  get lastName(){
    return this._lastName;
  }

  get salary(){
    return this._salary;
  }
  set salary(salary: number){
    this._salary = salary;
  }
}