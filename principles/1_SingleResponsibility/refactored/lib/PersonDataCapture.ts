import { Person } from "./Person"
import { PromptService } from './PromptService';

export class PersonDataCapture {
  static async capture() {
    // Ask for user information
    const user = new Person();

    // Start the Prompt library which provides features to prompt users for input
    const service = new PromptService();

    // Get first and last name from user
    const output = await service.getInput(['first', 'last']);

    // Check that information is valid
    if (output && output.first && typeof output.first === 'string' && output.last && typeof output.last === 'string') {
      user.firstname = output.first;
      user.lastname = output.last;
    }

    return user
  }

}