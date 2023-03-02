import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  @Input() id: number = 3753;
  @Input() status: string = 'online';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}
