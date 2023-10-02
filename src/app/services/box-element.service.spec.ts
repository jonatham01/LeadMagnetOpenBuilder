import { TestBed } from '@angular/core/testing';

import { BoxElementService } from './box-element.service';

describe('BoxElementService', () => {
  let service: BoxElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
