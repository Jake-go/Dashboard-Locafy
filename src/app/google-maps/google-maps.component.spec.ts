import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsComponent } from './google-maps.component';

describe('GoogleMapsComponent', () => {
  let component: GoogleMapsComponent;
  let fixture: ComponentFixture<GoogleMapsComponent>;

  let map: google.maps.Map;
  const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

  function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });
}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
