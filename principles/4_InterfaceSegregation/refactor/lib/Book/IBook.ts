import { ILibraryItem } from '../GeneralInterface/ILibraryItem';

export interface IBook extends ILibraryItem {
  author: string;
  pages: number;
}