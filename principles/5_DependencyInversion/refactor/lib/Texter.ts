import { IMessageSender } from './Emailer';
import { IPerson } from './Person';

export class Texter implements IMessageSender {
  sendMessage(person: IPerson, message: string) {
    console.log(`Sending text to ${person.firstName} to say ${message}`);
  }
}