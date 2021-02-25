import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeriveComponent } from './modal-derive.component';

describe('ModalDeriveComponent', () => {
  let component: ModalDeriveComponent;
  let fixture: ComponentFixture<ModalDeriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
