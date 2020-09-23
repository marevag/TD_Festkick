import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConcertComponent } from './concert/concert.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { AgmCoreModule} from '@agm/core';
import {HttpClientModule, } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    EventListComponent,
    EventDetailsComponent,
    LocalisationComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyA2kt_fL0fnrwSDz9Z3NcQWqHdXtdV8Ka4'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
