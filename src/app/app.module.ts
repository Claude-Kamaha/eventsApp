import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  LocationValidator
} from './events/index'
//import { EventsListComponent } from './events/events-list/events-list.component';
//import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { Toastr, TOASTR_TOKEN, JQ_TOKEN } from './common/index';
//import { , TOASTR_TOKEN,  } from './common/toastr.service';
//import { EventService } from './events/shared/event.service';
//import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './route';
//import { CreateEventComponent } from './events/create-event/create-event.component';
import { Page404Component } from './errors/page404/page404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
//import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
//import { ProfileComponent } from './user/profile/profile.component';

declare let toastr: Toastr;
declare let jQuery: any;
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Page404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    LocationValidator
    //ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LocationValidator,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    {
      provide: 'TOASTR_TOKEN',
      useValue: toastr
    },
    {
      provide: 'JQ_TOKEN',
      useValue: jQuery
    },
    EventService,
    EventRouteActivatorService,
    // {
    //   provide:EventRouteActivatorService,
    //   useClass: EventRouteActivatorService
    // },
    AuthService,

    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved this event')
  return true
}
