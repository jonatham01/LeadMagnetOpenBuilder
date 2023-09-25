import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBuilderComponent } from './pages-builder.component';

describe('PagesBuilderComponent', () => {
  let component: PagesBuilderComponent;
  let fixture: ComponentFixture<PagesBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesBuilderComponent]
    });
    fixture = TestBed.createComponent(PagesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
