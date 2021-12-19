import { Chore } from './lib/Chore';
import { Person } from './lib/Person';

class Program {
  static main(){
    const owner = new Person('Tim', 'Corey', 'tim@iamtimcorey.com', '(555) 555-5555');
    const chore = new Chore('Take out the trash', owner);

    chore.performedWork(2);
    chore.performedWork(1.5);
    chore.completeChore();
  }
}

Program.main();