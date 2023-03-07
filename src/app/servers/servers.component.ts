import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Test Server'
  serverCreated = false
  servers = ['Test Server', 'Test Server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created'
  }

  onUpdateServerName(event: Event) {
    // Cast the event to be of the input type only
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
