import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBoxComponent } from './page-box.component';

describe('PageBoxComponent', () => {
  let component: PageBoxComponent;
  let fixture: ComponentFixture<PageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBoxComponent]
    });
    fixture = TestBed.createComponent(PageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
