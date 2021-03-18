import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExploreArticlesComponent } from './add-explore-articles.component';

describe('AddExploreArticlesComponent', () => {
  let component: AddExploreArticlesComponent;
  let fixture: ComponentFixture<AddExploreArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExploreArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExploreArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
