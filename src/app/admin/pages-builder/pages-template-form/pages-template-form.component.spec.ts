import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTemplateFormComponent } from './pages-template-form.component';

describe('PagesTemplateFormComponent', () => {
  let component: PagesTemplateFormComponent;
  let fixture: ComponentFixture<PagesTemplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesTemplateFormComponent]
    });
    fixture = TestBed.createComponent(PagesTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
