import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus ='No server was created';
serverName = 'test server';
serverCreated =false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {

  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
