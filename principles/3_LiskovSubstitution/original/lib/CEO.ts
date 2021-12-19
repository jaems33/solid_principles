import { Employee } from './Employee';

export class CEO extends Employee {
  calculatePerHourRate(rank: number): number {
    let baseAmount = 150;
    this._salary = baseAmount * rank;
    return this._salary; // Violates covariance as we are returning a different value type compared to the parent class
  }
  assignManager(manager: Employee): void {
    throw new Error('The CEO has no manager');
  }
  generatePerformanceReview(){
    console.log('I am reviewing a direct report\'s performance.');
  }
  fireSomeone(){
    console.log('You\'re fired!');
  }
}