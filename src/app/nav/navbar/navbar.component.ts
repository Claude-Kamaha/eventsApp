import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from 'src/app/events';
import { AuthService } from 'src/app/user/auth.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
searchTerm:string ="";
  foundSessions!: ISession[];

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }
  searchSessions(searchTerm: string){
this.eventService.searchSessions(searchTerm).subscribe(
  (  sessions: ISession[]) =>{
    this.foundSessions = sessions;
    console.log(this.foundSessions)
  }
)
  }
}
