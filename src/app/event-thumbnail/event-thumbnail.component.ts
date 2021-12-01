import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }
@Input() event:any;
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

}
