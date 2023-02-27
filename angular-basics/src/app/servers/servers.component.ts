import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = 'Test Server'

  userName = ''

  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'Server was created' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // onUpdateUserName(event:Event){
  //   this.userName = (<HTMLInputElement>event.target).value;
  // }

  resetUserName(){
    this.userName = ''
  }
}
