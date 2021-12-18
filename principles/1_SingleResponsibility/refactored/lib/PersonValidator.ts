import { Person } from './Person';
import { StandardMessage } from './StandardMessage';

/*
  This should only change if we change how we validate the Person object
*/

export class PersonValidator {
  static Validate(person: Person): boolean {

    // Check if first and last names are valid.
    if (!person.firstname) {
      StandardMessage.DisplayValidationError('first name');
      return false;
    }

    if (!person.lastname) {
      StandardMessage.DisplayValidationError('last name');
      return false;
    }
    return true;
  }
}