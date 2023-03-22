import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>{{message}}</h1>
      <input type="text" [value]="message">
    </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  // The bang lets typescript know that you will assign it outside the scope of the constructor
  message!: string

  ngOnInit() {
    this.message = 'Hello World!'
  }
}
