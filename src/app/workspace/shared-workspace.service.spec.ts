import { TestBed } from '@angular/core/testing';

import { SharedWorkspaceService } from './shared-workspace.service';

describe('SharedWorkspaceService', () => {
  let service: SharedWorkspaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWorkspaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
