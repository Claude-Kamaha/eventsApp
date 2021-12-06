import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';
// declare let toastr: any

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

 events:any[];

  handleEventClicked(data: any){

 //console.log('received:', data)

}

  constructor(private eventService: EventService,
    private toastr:  ToastrService) {

    this.events = this.eventService.getEvents()
}

  ngOnInit(): void {

  }
  handleThumbnailClick(eventName:any){
    console.log(eventName)
    this.toastr.success(eventName)
    console.log('good')

  }



}
