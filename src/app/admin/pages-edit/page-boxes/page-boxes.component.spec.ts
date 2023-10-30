import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBoxesComponent } from './page-boxes.component';

describe('PageBoxesComponent', () => {
  let component: PageBoxesComponent;
  let fixture: ComponentFixture<PageBoxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBoxesComponent]
    });
    fixture = TestBed.createComponent(PageBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
