import { IBook } from './IBook';

export class ReferenceBook implements IBook {
  private _libraryId: string;
  private _title: string;
  private _author: string;
  private _pages: number;
  constructor(libraryId, title, author, pages) {
    this._libraryId = libraryId;
    this._title = title;
    this._author = author;
    this._pages = pages;
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

}