import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElementsCreatorComponent } from './page-elements-creator.component';

describe('PageElementsCreatorComponent', () => {
  let component: PageElementsCreatorComponent;
  let fixture: ComponentFixture<PageElementsCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageElementsCreatorComponent]
    });
    fixture = TestBed.createComponent(PageElementsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
