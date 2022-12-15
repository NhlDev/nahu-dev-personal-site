import { TestBed } from '@angular/core/testing';

import { StorageFixerService } from './ssr-storage-fixer.service';

describe('StorageFixerService', () => {
  let service: StorageFixerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageFixerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
