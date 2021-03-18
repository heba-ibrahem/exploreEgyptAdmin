import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesArticlesComponent } from './activities-articles.component';

describe('ActivitiesArticlesComponent', () => {
  let component: ActivitiesArticlesComponent;
  let fixture: ComponentFixture<ActivitiesArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
