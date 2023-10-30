import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElementsComponent } from './page-elements.component';

describe('PageElementsComponent', () => {
  let component: PageElementsComponent;
  let fixture: ComponentFixture<PageElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageElementsComponent]
    });
    fixture = TestBed.createComponent(PageElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
