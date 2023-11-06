import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaElementComponent } from './social-media-element.component';

describe('SocialMediaElementComponent', () => {
  let component: SocialMediaElementComponent;
  let fixture: ComponentFixture<SocialMediaElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaElementComponent]
    });
    fixture = TestBed.createComponent(SocialMediaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
