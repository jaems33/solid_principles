export interface IBorrowable {
  checkOutDurationInDays: number;
  borrower: string;
  borrowDate: Date;
  checkOut(borrower: string);
  checkIn();
  getDueDate(): Date;
}