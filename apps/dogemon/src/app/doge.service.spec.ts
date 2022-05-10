import { TestBed } from '@angular/core/testing';

import { DogeService } from './doge.service';

describe('DogeService', () => {
  let service: DogeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
