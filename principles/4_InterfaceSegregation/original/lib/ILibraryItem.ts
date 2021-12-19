export interface ILibraryItem {
  libraryId: string;
  title: string;
  author: string;
  pages: number;
  checkOutDurationInDays: number;
  borrower: string;
  borrowDate: Date;
  checkOut(borrower: string);
  checkIn();
  getDueDate(): Date;
}