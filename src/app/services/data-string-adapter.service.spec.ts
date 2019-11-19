import { TestBed, inject } from '@angular/core/testing';

import { DateStringAdapterService } from './date-string-adapter.service';

describe('DataStringAdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateStringAdapterService]
    });
  });

  it('should be created', inject([DateStringAdapterService], (service: DateStringAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
