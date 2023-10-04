import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesActiveComponent } from './images-active.component';

describe('ImagesActiveComponent', () => {
  let component: ImagesActiveComponent;
  let fixture: ComponentFixture<ImagesActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesActiveComponent]
    });
    fixture = TestBed.createComponent(ImagesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
