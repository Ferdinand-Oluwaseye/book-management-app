import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BookService,
    private fb: FormBuilder) {
      this.createForm();
     }


  createForm(){
    this.angForm = this.fb.group({
      book_name: ['',Validators.required],
      author_name: ['',Validators.required],
      serial_number: ['',Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBook(params['id']).subscribe(res => {
        this.book = res;
      });
    });
  }

  updateBook(book_name,author_name,serial_number){
    this.route.params.subscribe(params => {
      this.bs.updateBook(book_name,author_name,serial_number, params['id']);
      this.router.navigate(['book']);
    })
  }

}
