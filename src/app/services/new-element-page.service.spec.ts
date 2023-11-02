import { TestBed } from '@angular/core/testing';

import { NewElementPageService } from './new-element-page.service';

describe('NewElementPageService', () => {
  let service: NewElementPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewElementPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
