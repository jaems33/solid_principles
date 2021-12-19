import { ReferenceBook } from './lib/ReferenceBook';

class Program {
  static main(){
    const book = new ReferenceBook({
      libraryId: '29z9e',
      title: 'Hello World',
      author: 'Jonathan Isaac'
    });
    console.log(`${book.title} by ${book.author}`);
  }
}

Program.main();