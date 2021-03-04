import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevisarComponent } from './modal-revisar.component';

describe('ModalRevisarComponent', () => {
  let component: ModalRevisarComponent;
  let fixture: ComponentFixture<ModalRevisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRevisarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
