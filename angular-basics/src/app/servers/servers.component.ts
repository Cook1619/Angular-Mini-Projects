import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = 'Test Server'

  userName = ''

  serverCreated = false
  servers = ['TestServer', 'TestServer 2']


  counter: number[] = []

  showSecret = false


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
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

  increment(){
    this.showSecret = !this.showSecret
    this.counter.push(this.counter.length + 1)
  }
}
