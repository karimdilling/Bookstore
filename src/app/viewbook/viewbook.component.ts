import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  books: Book[] = [];

  constructor(private _service:BookstoreService, private _route:Router) { }

  ngOnInit(): void {
    this.getbooks();
  }

  getbooks() {
    this._service.getBooksFromServer().subscribe(
      data => this.books = data
    )
  }

  RedirectToAddBook() {
    this._route.navigate(['/addbook'])
  }

  deleteBookById(id:number) {
    this._service.deleteBook(id)
    window.location.reload()
  }

}
