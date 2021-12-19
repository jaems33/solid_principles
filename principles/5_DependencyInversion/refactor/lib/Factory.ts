import { Chore, IChore } from './Chore';
import { Emailer, IMessageSender } from './Emailer';
import { ILogger, Logger } from './Logger';
import { IPerson, Person } from './Person';
import { Texter } from './Texter';

export class Factory {
  public static createPerson(name: string, lastName: string, emailAddress: string, phoneNumber: string): IPerson {
    return new Person(name, lastName, emailAddress, phoneNumber);
  }
  public static createChore(name: string, owner: IPerson): IChore {
    return new Chore(name, owner, this.createLogger(), this.createMessageSender());
  }
  public static createLogger(): ILogger {
    return new Logger();
  }
  public static createMessageSender(): IMessageSender {
    return new Emailer();
  }
}