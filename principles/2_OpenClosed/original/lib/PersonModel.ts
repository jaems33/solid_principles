type PersonModelInput = {
  firstName: string;
  lastName: string;
}

export class PersonModel {
  private _firstName: string;
  private _lastName: string;
  constructor({ firstName, lastName }: PersonModelInput){
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get firstName(){
    return this._firstName;
  }
  set firstName(str: string){
    this._firstName = str;
  }
  get lastName(){
    return this._lastName;    
  }
  set lastName(str: string){
    this._lastName = str;
  }
}