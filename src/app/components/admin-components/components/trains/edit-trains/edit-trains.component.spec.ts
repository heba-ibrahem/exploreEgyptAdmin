import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainsComponent } from './edit-trains.component';

describe('EditTrainsComponent', () => {
  let component: EditTrainsComponent;
  let fixture: ComponentFixture<EditTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
