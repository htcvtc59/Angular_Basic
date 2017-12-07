import { TestBed, inject } from '@angular/core/testing';

import { ServiceweatherService } from './serviceweather.service';

describe('ServiceweatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceweatherService]
    });
  });

  it('should be created', inject([ServiceweatherService], (service: ServiceweatherService) => {
    expect(service).toBeTruthy();
  }));
});
