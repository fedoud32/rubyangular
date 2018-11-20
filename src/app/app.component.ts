
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookComponent } from './_models/book.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent {
  title = 'app works!';
  books: bookComponent[];
 
  constructor(private http:HttpClient){
    this.http.get('http://localhost:3000/books.json')
    .subscribe((res : bookComponent[]) => this.books = res);
    }
}
