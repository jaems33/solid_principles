import { ILogger, Logger } from './Logger';
import { Emailer, IMessageSender } from './Emailer';
import { IPerson } from './Person';
import { Factory } from './Factory';

export interface IChore {
  name: string;
  owner: IPerson;
  performedWork(hours: number): void;
  completeChore(): void;
}

export class Chore implements IChore {
  private _name: string;
  private _owner: IPerson;
  private _hoursWorked: number;
  private _isComplete: boolean;
  private _logger: ILogger;
  private _messageSender: IMessageSender;
  constructor(name: string, owner: IPerson, logger: ILogger, emailer: IMessageSender) {
    this._name = name;
    this._owner = owner;
    this._hoursWorked = 0;
    this._isComplete = false;
    this._logger = logger;
    this._messageSender = emailer;
  }

  performedWork(hours: number) {
    this._hoursWorked += hours;
    this._logger.log(`Performed work on ${this._name}`);
  }

  completeChore() {
    this._isComplete = true;
    this._logger.log(`Completed ${this._name}`);

    const emailer = new Emailer();
    this._messageSender.sendMessage(this._owner, `The chore ${this.name} is complete.`);
  }

  get name() {
    return this._name;
  }

  get owner() {
    return this._owner;
  }

}