import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private _http:HttpClient) { }

  getBooksFromServer():Observable<any> {
    return this._http.get<any>("http://localhost:8080/bookStore/")
  }

  addBookToServer(data:Book) {
    this._http.post("http://localhost:8080/bookStore/", data).subscribe()
  }

  deleteBook(id:number) {
    return this._http.delete(`http://localhost:8080/bookStore/${id}`).subscribe()
  }
}
