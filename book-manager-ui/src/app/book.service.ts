import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  uri = 'http://localhost:9000/book';

  constructor(private http: HttpClient) { }

  addBook(book_name, author_name, serial_number) {
    const obj = {
      book_name: book_name,
      author_name: author_name,
      serial_number: serial_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }


  // clicked(){
  //   document.write('Done')
  // }

  getBooks(){
    return this
      .http
      .get(`${this.uri}`);
  }
}