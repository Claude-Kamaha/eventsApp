import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/event.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent;
  addMode!: boolean;
  filterBy: string ='all'
  sortBy: string ='name'
  constructor(private eventService: EventService,
   private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event=this.eventService.getEvent(
      +this.route.snapshot.params['id'])
  }
  addSession(){
    this.addMode = true
  }
  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(
      s =>s.id
    ));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false

  }
  cancelAddSession(){
    this.addMode = false
  }
  test(event:any){
    console.log(this.filterBy)
   // console.log(event.target.attributes.class)
  }
}
