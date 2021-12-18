export class Person {
  private _first: string;
  private _last: string;
  constructor(first: string = '', last: string = '') {
    this._first = first;
    this._last = last;
  }
  set firstname(str: string) {
    this._first = str;
  }
  get firstname() {
    return this._first;
  }
  set lastname(str: string) {
    this._last = str;
  }
  get lastname() {
    return this._last;
  }
}