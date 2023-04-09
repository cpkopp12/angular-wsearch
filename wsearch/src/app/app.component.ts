import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // pages will contain response, easier to pass to child
  pages: any = [];

  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pagesList) => {
      this.pages = pagesList;
    })
  }
}
