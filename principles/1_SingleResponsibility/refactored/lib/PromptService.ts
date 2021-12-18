import prompt from 'prompt';
import util from 'util';

export class PromptService {
  constructor() {
    this.initialize();
  }
  initialize() {
    prompt.start();
  }
  getInput(arr: Array<string>) {
    const getInput = util.promisify(prompt.get);
    return getInput(arr);
  }
}