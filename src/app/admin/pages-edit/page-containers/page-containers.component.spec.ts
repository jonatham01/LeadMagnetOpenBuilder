import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainersComponent } from './page-containers.component';

describe('PageContainersComponent', () => {
  let component: PageContainersComponent;
  let fixture: ComponentFixture<PageContainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContainersComponent]
    });
    fixture = TestBed.createComponent(PageContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
