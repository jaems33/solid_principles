import { EmployeeModel } from './lib/Models/EmployeeModel';
import { PersonModel } from './lib/Models/PersonModel';
import { ManagerModel } from './lib/Models/ManagerModel';
import { IApplicantModel } from './lib/Models/IApplicantModel';
import { ExecutiveModel } from './lib/Models/ExecutiveModel';

class Program {
  static main() {

    const applicants: Array<IApplicantModel> = [
      new PersonModel({ firstName: 'Tim', lastName: 'Corey' }),
      new ManagerModel({ firstName: 'Sue', lastName: 'Storm' }),
      new ExecutiveModel({ firstName: 'Nancy', lastName: 'Roman' })
    ];

    const employees = new Array<EmployeeModel>();

    for (const person of applicants) {
      employees.push(person.accountProcessor.create(person));
    }

    for (const employee of employees) {
      console.log(`${employee.firstName} ${employee.lastName}: ${employee.email} isManager: ${employee.isManager} isExecutive: ${employee.isExecutive}`);
    }

  }
}

Program.main();