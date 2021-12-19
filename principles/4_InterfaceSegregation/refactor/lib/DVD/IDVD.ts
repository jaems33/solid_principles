import { ILibraryItem } from '../GeneralInterface/ILibraryItem';

export interface IDVD extends ILibraryItem {
  runtimeInMinutes: number;
  actors: Array<string>;
}