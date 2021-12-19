import { IBorrowableAudioBook } from './IBorrowableAudioBook';

export class AudioBook implements IBorrowableAudioBook {
  private _libraryId: string;
  private _title: string;
  private _author: string;
  private _checkOutDurationInDays: number | null;
  private _borrower: string;
  private _borrowDate: Date | null;
  private _runtimeInMinutes: number;
  constructor(libraryId, title, author, checkOutDurationInDays = 14, borrower = '', borrowDate, runtimeInMinutes = 0) {
    this._libraryId = libraryId;
    this._title = title;
    this._author = author;
    this._checkOutDurationInDays = checkOutDurationInDays;
    this._borrower = borrower;
    this._borrowDate = borrowDate;
    this._runtimeInMinutes = runtimeInMinutes;
  }

  set libraryId(str: string) {
    this._libraryId = str;
  }
  get libraryId() {
    return this._libraryId;
  }

  set title(str: string) {
    this._title = str;
  }
  get title() {
    return this._title;
  }

  set author(str: string) {
    this._author = str;
  }
  get author() {
    return this._author;
  }

  set checkOutDurationInDays(n: number) {
    this._checkOutDurationInDays = n;
  }
  get checkOutDurationInDays() {
    return this._checkOutDurationInDays;
  }

  get borrower() {
    return this._borrower;
  }
  set borrower(b: string) {
    this._borrower = b;
  }

  get borrowDate() {
    if (this._borrowDate === null) {
      throw new Error("No borrower");
    }
    return this._borrowDate;
  }
  set borrowDate(d: Date) {
    this._borrowDate = d;
  }

  get runtimeInMinutes() {
    return this._runtimeInMinutes;
  }
  set runtimeInMinutes(n: number) {
    this._runtimeInMinutes = n;
  }

  checkIn() {
    this._borrower = '';
  }

  checkOut(borrower: string) {
    this._borrower = borrower;
    this._borrowDate = new Date();
  }

  getDueDate(): Date {
    if (this.borrowDate) {
      const result = new Date(this.borrowDate);
      result.setDate(result.getDate() + this.checkOutDurationInDays);
      return result;
    } else {
      throw new Error('Item has no borrow date.');
    }
  }

}