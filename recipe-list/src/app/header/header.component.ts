import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() innerTextProp = new EventEmitter<string>();

  onSelect(selection: string) {
    this.innerTextProp.emit(selection);
  }
}
