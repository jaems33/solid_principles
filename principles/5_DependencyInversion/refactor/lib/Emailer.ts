import { IPerson } from './Person';

export interface IMessageSender {
  sendMessage(person: IPerson, message: string): void;
}

export class Emailer implements IMessageSender {
  sendMessage(person: IPerson, message: string) {
    console.log(`Simulating an e-mail sent to ${person.emailAddress}`);
  }
}