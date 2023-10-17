import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWidgetsComponent } from './page-widgets.component';

describe('PageWidgetsComponent', () => {
  let component: PageWidgetsComponent;
  let fixture: ComponentFixture<PageWidgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWidgetsComponent]
    });
    fixture = TestBed.createComponent(PageWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
