import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event.model';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }
  @Input()
  event!: IEvent;
@Output() eventClick = new EventEmitter

sometypes:any ="some values"
handleClickMe(){
this.eventClick.emit(this.event.name)
}
logfoo(){
  console.log('hey it is me')
}
  ngOnInit(): void {
  }
  colorClass(){
    const ealyStart = this.event && this.event.time ==='8:00 am'
    return {
      green: ealyStart,
      bold:ealyStart
    }
  }

}
