import { TestBed } from '@angular/core/testing';

import { MunchiesService } from './munchies.service';

describe('MunchiesService', () => {
  let service: MunchiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunchiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
