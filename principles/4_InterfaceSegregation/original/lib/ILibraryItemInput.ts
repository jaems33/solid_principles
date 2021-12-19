export interface ILibraryItemInput {
  libraryId?: string;
  title?: string;
  author?: string;
  pages?: number;
  checkOutDurationInDays?: number;
  borrower?: string;
  borrowDate?: Date;
}