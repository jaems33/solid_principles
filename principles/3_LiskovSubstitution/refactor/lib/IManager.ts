import { IEmployee } from './IEmployee';

export interface IManager extends IEmployee {
  generatePerformanceReview();
}