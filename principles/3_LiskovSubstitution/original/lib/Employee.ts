export class Employee {
  protected _firstName: string;
  protected _lastName: string;
  protected _manager: Employee | null;
  protected _salary: number;

  constructor(firstName='', lastName: string = '', manager=null, salary=0){
    this._firstName = firstName;
    this._lastName = lastName;
    this._manager = manager;
    this._salary = salary;
  }
  
  calculatePerHourRate(rank: number){
    const baseAmount = 12.5;
    this._salary = baseAmount + (rank * 2);
  }

  assignManager(manager: Employee){
    this._manager = manager;
  }

  set firstName(str: string){
    this._firstName = str
  }
  get firstName(){
    return this._firstName;
  }

  get manager(){
    if (this._manager === null){
      throw new Error('This employee has no manager.');
    }
    return this._manager;
  }
  set manager(manager: Employee){
    this._manager = manager;
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