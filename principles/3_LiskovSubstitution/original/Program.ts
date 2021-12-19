import { Employee } from './lib/Employee';
import { Manager } from './lib/Manager';
import { CEO } from './lib/CEO';

class Program {
  static main(){
    const accountingVP = new Manager();
    accountingVP.firstName = 'Emma';
    accountingVP.lastName = 'Stone';
    accountingVP.calculatePerHourRate(4);

    const emp = new Manager(); // Should be replaceable by CEO
    emp.firstName = 'Tim';
    emp.lastName = 'Corey';
    emp.assignManager(accountingVP);
    emp.calculatePerHourRate(2);

    console.log(`${emp.firstName}'s salary is ${emp.salary}/hour`);

  }
}

Program.main();