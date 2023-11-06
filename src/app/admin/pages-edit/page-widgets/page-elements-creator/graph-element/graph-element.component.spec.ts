import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphElementComponent } from './graph-element.component';

describe('GraphElementComponent', () => {
  let component: GraphElementComponent;
  let fixture: ComponentFixture<GraphElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphElementComponent]
    });
    fixture = TestBed.createComponent(GraphElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
