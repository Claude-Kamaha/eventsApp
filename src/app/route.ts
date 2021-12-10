import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { Routes } from '@angular/router';
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Page404Component } from "./errors/page404/page404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";

export const appRoute:Routes =[
{path:'events/new', component: CreateEventComponent},
{path:'events', component: EventsListComponent},
{path:'events/:id', component: EventDetailsComponent,
canActivate: [EventRouteActivatorService]},
{path:'404', component: Page404Component},
{path:'', redirectTo: '/events', pathMatch:'full'}

]
