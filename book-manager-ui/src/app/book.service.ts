import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  uri = 'http://' + process.env.API + ':9000/book';

  constructor(private http: HttpClient) { }

  addBook(book_name, author_name, serial_number) {
    const obj = {
      book_name: book_name,
      author_name: author_name,
      serial_number: serial_number
    };
    // console.log(obj);
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

  editBook(id: any){
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
            
  }

  updateBook(book_name, author_name, serial_number, id) {
    const obj = {
      book_name: book_name,
      author_name: author_name,
      serial_number: serial_number
    };
    console.log(obj);
    this
      .http
      .put(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBook(id){
   console.log("Deleting");
   return this
            .http
            .delete(`${this.uri}/deleteBook/${id}`)
            .subscribe(res => console.log('Deleted'));
  }
}