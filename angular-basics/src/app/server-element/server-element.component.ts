import {Component, Input} from '@angular/core';

interface IElement {
  type: string,
  name: string,
  content: string
}

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input('srvElement') element: IElement = <IElement>{};

}
