import { TestBed } from '@angular/core/testing';

import { LandingElementService } from './landing-element.service';

describe('LandingElementService', () => {
  let service: LandingElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
