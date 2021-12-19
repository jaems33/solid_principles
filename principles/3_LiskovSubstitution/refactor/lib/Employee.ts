import { BaseEmployee } from './BaseEmployee';
import { IEmployee } from './IEmployee';
import { IManaged } from './IManaged';

export class Employee extends BaseEmployee implements IManaged {
  _manager: IEmployee | null;
  constructor(firstName='', lastName='', salary=0, manager=null){
    super(firstName, lastName, salary);
    this._manager = manager;
  }
  assignManager(manager: IEmployee){
    this._manager = manager;
  }
  get manager(){
    if (this._manager === null){
      throw new Error('This employee has no manager.');
    }
    return this._manager;
  }
  set manager(manager: IEmployee){
    this._manager = manager;
  }
}