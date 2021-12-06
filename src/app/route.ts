import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { Routes } from '@angular/router';
import { CreateEventComponent } from "./events/create-event/create-event.component";

export const appRoute:Routes =[
{path:'events/new', component: CreateEventComponent},
{path:'events', component: EventsListComponent},
{path:'events/:id', component: EventDetailsComponent},
{path:'', redirectTo: '/events', pathMatch:'full'}
]
