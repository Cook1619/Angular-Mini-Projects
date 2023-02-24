import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  @Input() id: number = 3753
  @Input() status: string = 'Online'
}
