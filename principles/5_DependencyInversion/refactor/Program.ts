import { Factory } from './lib/Factory';

class Program {
  static main() {
    const owner = Factory.createPerson('Tim', 'Corey', 'tim@iamtimcorey.com', '(555) 555-5555');
    const chore = Factory.createChore('Take out the trash', owner);

    chore.performedWork(2);
    chore.performedWork(1.5);
    chore.completeChore();
  }
}

Program.main();