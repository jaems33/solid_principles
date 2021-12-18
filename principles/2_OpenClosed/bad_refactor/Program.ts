import { Accounts } from './lib/Accounts';
import { EmployeeModel } from './lib/EmployeeModel';
import { EmployeeType } from './lib/Enums';
import { PersonModel } from './lib/PersonModel';

class Program {
  static main() {

    const applicants = [
      new PersonModel({ firstName: 'Tim', lastName: 'Corey' }),
      new PersonModel({ firstName: 'Sue', lastName: 'Storm', employeeType: EmployeeType.Manager }),
      new PersonModel({ firstName: 'Nancy', lastName: 'Roman', employeeType: EmployeeType.Executive })
    ];

    const employees = new Array<EmployeeModel>();

    for (const person of applicants) {
      employees.push(Accounts.create(person));
    }

    for (const employee of employees) {
      console.log(`${employee.firstName} ${employee.lastName}: ${employee.email} isManager: ${employee.isManager} isExecutive: ${employee.isExecutive}`);
    }

  }
}

Program.main();