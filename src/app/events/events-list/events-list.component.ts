import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';
// declare let toastr: any

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

 events:any;

  handleEventClicked(data: any){

 //console.log('received:', data)

}

  constructor(private eventService: EventService,
    private toastr:  ToastrService,
    private route: ActivatedRoute) {

    //this.events = this.eventService.getEvents()
}

  ngOnInit(): void {
    this.events= this.route.snapshot.data['events']
    // this.eventService.getEvents().subscribe(events=>{
    //   this.events=events
    // })
  }
  handleThumbnailClick(eventName:any){
    console.log(eventName)
    this.toastr.success(eventName)
    console.log('good')

  }



}
