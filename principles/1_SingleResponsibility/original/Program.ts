import { Person } from './lib/Person';
import prompt from 'prompt';
import util from 'util';

class Program {
  static async main() {

    console.log('Welcome to my application.');

    // Start the Prompt library which provides features to prompt users for input
    prompt.start();
    const getInput = util.promisify(prompt.get);

    // Ask for user information
    const user = new Person();

    // Use the prompt library to get first and last name.
    const output = await getInput(['first', 'last']);

    // Check if first and last names are valid.
    if (!output || !output.first || typeof output.first !== 'string') {
      console.log('You did not provide a valid first name.');
      return;
    }

    if (!output || !output.last || typeof output.last !== 'string') {
      console.log('You did not provide a valid last name.');
      return;
    }

    user.firstname = output.first;
    user.lastname = output.last;

    // Create a username for the person
    console.log(`Your username is ${user.firstname.substring(0, 1)}${user.lastname}`);

  }
}

Program.main();