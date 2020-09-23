import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApiConcertService {
    constructor(private http: HttpClient) { }




  getEvents(): Observable<any>{
    return this.http.get('assets/events.json');
}}
