import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubcomponentComponent } from './page-subcomponent.component';

describe('PageSubcomponentComponent', () => {
  let component: PageSubcomponentComponent;
  let fixture: ComponentFixture<PageSubcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSubcomponentComponent]
    });
    fixture = TestBed.createComponent(PageSubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
