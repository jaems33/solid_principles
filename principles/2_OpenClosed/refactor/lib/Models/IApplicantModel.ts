import { IAccounts } from '../Accounts/IAccounts';

export interface IApplicantModel {
  firstName: string;
  lastName: string;
  accountProcessor: IAccounts;
}