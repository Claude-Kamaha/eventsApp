import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  event1 ={
    id:1,
    name: 'Mireille mourn',
    date: '12/02/2021',
    time: '10:00 am',
    price: '10000',
    location:{
      address: 'Bafou',
      city: 'Dschang',
      country: 'Cameroun'
    }
  }
  handleEventClicked(data: any){
console.log('received:', data)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
