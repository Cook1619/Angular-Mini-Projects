import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-list';
  selection = 'recipe';

  onHeaderChange(headerData) {
    this.selection = headerData;
  }
}
