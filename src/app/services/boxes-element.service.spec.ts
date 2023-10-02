import { TestBed } from '@angular/core/testing';

import { BoxesElementService } from './boxes-element.service';

describe('BoxesElementService', () => {
  let service: BoxesElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxesElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
