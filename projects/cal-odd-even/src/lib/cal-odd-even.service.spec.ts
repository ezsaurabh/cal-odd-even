import { TestBed } from '@angular/core/testing';

import { CalOddEvenService } from './cal-odd-even.service';

describe('CalOddEvenService', () => {
  let service: CalOddEvenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalOddEvenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
