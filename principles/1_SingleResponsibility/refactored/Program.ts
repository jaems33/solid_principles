import { StandardMessage } from './lib/StandardMessage';
import { PersonDataCapture } from './lib/PersonDataCapture';
import { PersonValidator } from './lib/PersonValidator';
import { AccountGenerator } from './lib/AccountGenerator';

class Program {
  static async main() {

    StandardMessage.WelcomeMessage();

    const user = await PersonDataCapture.capture();

    const isUserValid = PersonValidator.Validate(user);

    if (isUserValid === false) {
      return;
    }

    AccountGenerator.createAccount(user);

  }
}

Program.main();