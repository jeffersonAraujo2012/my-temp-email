import { TestBed } from '@angular/core/testing';

import { TempEmailService } from './temp-email.service';

describe('TempEmailService', () => {
  let service: TempEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
