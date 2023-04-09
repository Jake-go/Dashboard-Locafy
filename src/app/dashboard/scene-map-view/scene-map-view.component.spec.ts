import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneMapViewComponent } from './scene-map-view.component';

describe('SceneMapViewComponent', () => {
  let component: SceneMapViewComponent;
  let fixture: ComponentFixture<SceneMapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneMapViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceneMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
