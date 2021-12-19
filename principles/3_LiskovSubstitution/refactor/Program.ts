import { Employee } from './lib/Employee';
import { Manager } from './lib/Manager';
import { CEO } from './lib/CEO';
import { IManaged } from './lib/IManaged';
import { IManager } from './lib/IManager';

class Program {
  static main(){
    const accountingVP: IManager = new Manager();
    accountingVP.firstName = 'Emma';
    accountingVP.lastName = 'Stone';
    accountingVP.calculatePerHourRate(4);

    const emp: IManaged = new Employee(); 
    emp.firstName = 'Tim';
    emp.lastName = 'Corey';
    emp.assignManager(accountingVP);
    emp.calculatePerHourRate(2);

    console.log(`${emp.firstName}'s salary is ${emp.salary}/hour`);

  }
}

Program.main();