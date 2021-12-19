import { IEmployee } from './IEmployee';

export interface IManaged extends IEmployee {
  manager: IEmployee;
  assignManager(manager: IEmployee);
}