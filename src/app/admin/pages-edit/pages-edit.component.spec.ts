import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEditComponent } from './pages-edit.component';

describe('PagesEditComponent', () => {
  let component: PagesEditComponent;
  let fixture: ComponentFixture<PagesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesEditComponent]
    });
    fixture = TestBed.createComponent(PagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
