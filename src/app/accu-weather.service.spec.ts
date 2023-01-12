import { TestBed } from '@angular/core/testing';

import { AccuWeatherService } from './services/accu-weather.service';

describe('AccuWeatherService', () => {
  let service: AccuWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccuWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
