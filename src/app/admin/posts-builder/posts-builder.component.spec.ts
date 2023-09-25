import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsBuilderComponent } from './posts-builder.component';

describe('PostsBuilderComponent', () => {
  let component: PostsBuilderComponent;
  let fixture: ComponentFixture<PostsBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsBuilderComponent]
    });
    fixture = TestBed.createComponent(PostsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
