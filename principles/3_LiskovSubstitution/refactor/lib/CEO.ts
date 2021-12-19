import { BaseEmployee } from './BaseEmployee';
import { Employee } from './Employee';
import { IManager } from './IManager';

export class CEO extends BaseEmployee implements IManager {
  calculatePerHourRate(rank: number): number {
    let baseAmount = 150;
    this._salary = baseAmount * rank;
    return this._salary; // Violates covariance as we are returning a different value type compared to the parent class
  }
  generatePerformanceReview(){
    console.log('I am reviewing a direct report\'s performance.');
  }
  fireSomeone(){
    console.log('You\'re fired!');
  }
}