import { Person } from './Person';

export class Emailer {
  sendMail(person: Person, str: string) {
    console.log(`Simulating an e-mail sent to ${person.emailAddress}`);
  }
}