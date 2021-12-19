import { Employee } from './Employee';
import { IManager } from './IManager';

export class Manager extends Employee implements IManager {
  calculatePerHourRate(rank: number): void {
    if (rank > 5){
      throw new Error('Rank is too high!'); // Violates pre-conditions as you are enforcing tighter rules than the parent class
    }
    let baseAmount = 19.75;
    this._salary = baseAmount + (rank * 4);
  }
  generatePerformanceReview(){
    console.log('I am reviewing a direct report\'s performance.');
  }
}