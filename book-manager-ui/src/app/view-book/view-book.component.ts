import { Component, OnInit } from '@angular/core';
import Book from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  books: Book[];

  constructor(private bs: BookService) { }

  ngOnInit() {
    this.bs
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

  deleteBook(id){
    this.bs.deleteBook(id);
    
    
  }
  

}
