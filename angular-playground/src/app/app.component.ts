import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <app-donut-list></app-donut-list>
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
  message!: string;
  newMessage: string = '';

  ngOnInit() {
    this.message = 'Hello World!'
  }

  handleClick(event: Event){
    console.log(event);
  }

  // handleInput(event: Event){
  //   const {value} = event.target as HTMLInputElement;
  //   this.newMessage = value;
  //   console.log(value)
  // }
}
