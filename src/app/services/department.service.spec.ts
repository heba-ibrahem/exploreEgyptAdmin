import { TestBed } from '@angular/core/testing';
import { department } from './department.service';



describe('department', () => {
  let service: department;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(department);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
