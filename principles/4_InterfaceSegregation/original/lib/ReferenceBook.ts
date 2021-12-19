import { ILibraryItem } from './ILibraryItem';
import { ILibraryItemInput } from './ILibraryItemInput';

export class ReferenceBook implements ILibraryItem {
  private _libraryId: string;
  private _title: string;
  private _author: string;
  private _pages: number;
  private _checkOutDurationInDays: number | null;
  private _borrower: string | null;
  private _borrowDate: Date | null;
  constructor({ libraryId, title, author, pages }: ILibraryItemInput) {
    this._libraryId = libraryId;
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._checkOutDurationInDays = 0;
    this._borrower = null;
    this._borrowDate = null;
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

  set pages(n: number) {
    this._pages = n;
  }
  get pages() {
    return this._pages;
  }

  set checkOutDurationInDays(n: number) {
    this._checkOutDurationInDays = n;
  }
  get checkOutDurationInDays() {
    return this._checkOutDurationInDays;
  }

  get borrower() {
    if (this._borrower === null) {
      throw new Error("No borrower");
    }
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

  checkIn() {
    throw new Error("Cannot check-in a reference book.");
  }

  checkOut(borrower: string) {
    throw new Error("Cannot check-out a reference book.");
  }

  getDueDate(): Date {
    throw new Error("Book has no due date");
  }

}