import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadBoxComponent } from './modal-upload-box.component';

describe('ModalUploadBoxComponent', () => {
  let component: ModalUploadBoxComponent;
  let fixture: ComponentFixture<ModalUploadBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUploadBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUploadBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
