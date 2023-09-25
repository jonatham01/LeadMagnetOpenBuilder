import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPanelComponent } from './pages-panel.component';

describe('PagesPanelComponent', () => {
  let component: PagesPanelComponent;
  let fixture: ComponentFixture<PagesPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesPanelComponent]
    });
    fixture = TestBed.createComponent(PagesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
