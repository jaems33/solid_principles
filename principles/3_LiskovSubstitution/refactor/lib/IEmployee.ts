export interface IEmployee {
  firstName: string;
  lastName: string;
  salary: number;
  calculatePerHourRate(rank: number);
}