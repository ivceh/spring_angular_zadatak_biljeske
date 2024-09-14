import { TestBed } from '@angular/core/testing';

import { BiljeskaService } from './biljeska.service';

describe('BiljeskaService', () => {
  let service: BiljeskaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiljeskaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
