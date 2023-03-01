import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  newServerContent = '';

  onAddServer(serverInput: HTMLInputElement) {
  this.serverCreated.emit({serverName: serverInput.value, serverContent: this.newServerContent})
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: serverInput.value, serverContent: this.newServerContent})
  }

}
