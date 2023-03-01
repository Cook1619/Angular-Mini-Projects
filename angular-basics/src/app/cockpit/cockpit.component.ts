import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  // This gives us access to the local reference defined in the template
  @ViewChild('serverContentInput', {static: false}) serverContentInput: ElementRef;
  // Only needed these for 2 way data binding methods
  // newServerName = '';
  // newServerContent = '';

  onAddServer(serverInput: HTMLInputElement) {
  this.serverCreated.emit({serverName: serverInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: serverInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }

}
