import { TestBed } from '@angular/core/testing';

import { PlatformChekService } from './platform-check.service';

describe('PlatformChekService', () => {
  let service: PlatformChekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformChekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
