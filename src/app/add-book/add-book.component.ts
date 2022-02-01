import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private _service:BookstoreService, private _route:Router) { }

  public book: Book = {} as Book;

  ngOnInit(): void {
  }

  addbookFormSubmit() {
    this._service.addBookToServer(this.book)
    this._route.navigate(["../"])
  }

}
