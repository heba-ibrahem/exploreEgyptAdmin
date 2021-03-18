import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExploreArticlesComponent } from './view-explore-articles.component';

describe('ViewExploreArticlesComponent', () => {
  let component: ViewExploreArticlesComponent;
  let fixture: ComponentFixture<ViewExploreArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExploreArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExploreArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
