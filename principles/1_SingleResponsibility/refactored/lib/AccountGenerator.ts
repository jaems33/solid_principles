import { Person } from './Person';

export class AccountGenerator {
  static createAccount(user: Person) {
    // Create a username for the person
    console.log(`Your username is ${user.firstname.substring(0, 1)}${user.lastname}`);
  }
}