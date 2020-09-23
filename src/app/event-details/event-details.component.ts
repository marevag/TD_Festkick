import { Component, OnInit } from '@angular/core';
import {ApiConcertService} from '../api-concert.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private API: ApiConcertService) { }

  ngOnInit(): void {
  }

}
