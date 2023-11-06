import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleElementComponent } from './title-element.component';

describe('TitleElementComponent', () => {
  let component: TitleElementComponent;
  let fixture: ComponentFixture<TitleElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleElementComponent]
    });
    fixture = TestBed.createComponent(TitleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
