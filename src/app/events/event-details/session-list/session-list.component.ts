import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from '../..';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit,OnChanges {
  @Input()
  sessions: ISession[] | undefined;
  @Input()
  filterBy!: string;
  visibleSessions: ISession[] | undefined =[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.filterBy)
  }
ngOnChanges(): void {

    if(this.sessions){
      this.filterSession(this.filterBy)
    }
}
filterSession(filter:any){
  console.log('hey1')
  if(filter === 'all'){
   this.visibleSessions=this.sessions?.slice(0)//slice(0) create a complete copy list of array
    //this.visibleSessions=this.sessions
    console.log('hey2')
  }
  else{
this.visibleSessions = this.sessions?.filter(session => {
  console.log('hey3')
  return session.level.toLocaleLowerCase() === filter;
})
  }
  console.log('hey4')
}
}
