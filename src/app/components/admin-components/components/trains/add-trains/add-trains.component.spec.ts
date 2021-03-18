import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainsComponent } from './add-trains.component';

describe('AddTrainsComponent', () => {
  let component: AddTrainsComponent;
  let fixture: ComponentFixture<AddTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
