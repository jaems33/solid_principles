import { Logger } from './Logger';
import { Emailer } from './Emailer';
import { Person } from './Person';

export class Chore {
  private _name: string;
  private _owner: Person;
  private _hoursWorked: number;
  private _isComplete: boolean;
  constructor(name: string, owner: Person){
    this._name = name;
    this._owner = owner;
    this._hoursWorked = 0;
    this._isComplete = false;
  }
  
  performedWork(hours: number){
    this._hoursWorked += hours;
    const log = new Logger();
    log.log(`Performed work on ${this._name}`);
  }

  completeChore(){
    this._isComplete = true;
    const log = new Logger();
    log.log(`Completed ${this._name}`);

    const emailer = new Emailer();
    emailer.sendMail(this._owner, `The chore ${this.name} is complete.`);
  }

  get name(){
    return this._name;
  }

  get owner(){
    return this._owner;
  }

}