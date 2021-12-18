import { Accounts } from './lib/Accounts';
import { EmployeeModel } from './lib/EmployeeModel';
import { PersonModel } from './lib/PersonModel';

class Program {
  static main() {

    const applicants = [
      new PersonModel({ firstName: 'Tim', lastName: 'Corey' }),
      new PersonModel({ firstName: 'Sue', lastName: 'Storm' }),
      new PersonModel({ firstName: 'Nancy', lastName: 'Roman' })
    ];

    const employees = new Array<EmployeeModel>();

    for (const person of applicants) {
      employees.push(Accounts.create(person));
    }

    for (const employee of employees) {
      console.log(`${employee.firstName} ${employee.lastName}: ${employee.email}`);
    }

  }
}

Program.main();