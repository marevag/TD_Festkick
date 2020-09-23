import { Component, OnInit } from '@angular/core';
import {ApiConcertService} from '../api-concert.service';
import {element} from 'protractor';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  concerts: any;
  concertDetails: any;

  constructor(private http: HttpClient, private API: ApiConcertService) { }

  ngOnInit(): void {
  }


  public getConcert(): void {
    this.API.getEvents().subscribe((data) => { this.concerts = data; console.log(data); },
    err => console.log('err'),
      () => console.log('get concert complete'));
  }
  /*public getConcertDetail(element: any): Observable<any>{
    return this.http.get('');
  }*/


}
