import { TestBed } from '@angular/core/testing';

import { ApiConcertService } from './api-concert.service';

describe('ApiConcertService', () => {
  let service: ApiConcertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConcertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
