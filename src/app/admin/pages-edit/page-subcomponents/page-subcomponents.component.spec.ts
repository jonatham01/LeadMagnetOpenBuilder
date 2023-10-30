import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubcomponentsComponent } from './page-subcomponents.component';

describe('PageSubcomponentsComponent', () => {
  let component: PageSubcomponentsComponent;
  let fixture: ComponentFixture<PageSubcomponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSubcomponentsComponent]
    });
    fixture = TestBed.createComponent(PageSubcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
