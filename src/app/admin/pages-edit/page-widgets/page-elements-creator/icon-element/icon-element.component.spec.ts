import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconElementComponent } from './icon-element.component';

describe('IconElementComponent', () => {
  let component: IconElementComponent;
  let fixture: ComponentFixture<IconElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconElementComponent]
    });
    fixture = TestBed.createComponent(IconElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
