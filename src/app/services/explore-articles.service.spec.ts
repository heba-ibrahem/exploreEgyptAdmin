import { TestBed } from '@angular/core/testing';

import { ExploreArticlesService } from './explore-articles.service';

describe('ExploreArticlesService', () => {
  let service: ExploreArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
