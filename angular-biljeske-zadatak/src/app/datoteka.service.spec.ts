import { TestBed } from '@angular/core/testing';

import { DatotekaService } from './datoteka.service';

describe('DatotekaService', () => {
  let service: DatotekaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatotekaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
