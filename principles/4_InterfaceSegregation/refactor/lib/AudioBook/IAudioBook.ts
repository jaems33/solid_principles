import { ILibraryItem } from '../GeneralInterface/ILibraryItem';

export interface IAudioBook extends ILibraryItem {
  runtimeInMinutes: number;
}