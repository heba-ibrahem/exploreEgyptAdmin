import { TestBed } from '@angular/core/testing';

import { ActArticlesService } from './act-articles.service';

describe('ActArticlesService', () => {
  let service: ActArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
