import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from '../..';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input()
  sessions: ISession[] | undefined;
  @Input()
  filterBy!: string;
  visibleSessions: ISession[] | undefined = []
  @Input()
  sorting: string | undefined
  constructor() { }

  ngOnInit(): void {
    console.log(this.sorting)
  }
  ngOnChanges(): void {

    if (this.sessions) {
      this.filterSession(this.filterBy);
      this.sorting == 'name' ? this.visibleSessions?.sort(sortByNameAsc) : this.visibleSessions?.sort(sortByVotesDesc)
    }
  }
  filterSession(filter: any) {

    if (filter === 'all') {
      this.visibleSessions = this.sessions?.slice(0)
      //slice(0) create a complete copy list of array
      //this.visibleSessions=this.sessions

    }
    else {
      this.visibleSessions = this.sessions?.filter(session => {

        return session.level.toLocaleLowerCase() === filter;
      })
    }

  }
}
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1

}
function sortByVotesDesc(s1: ISession, s2: ISession) {

  return s2.voters.length - s1.voters.length;

}
