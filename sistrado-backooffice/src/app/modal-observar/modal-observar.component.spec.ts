import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObservarComponent } from './modal-observar.component';

describe('ModalObservarComponent', () => {
  let component: ModalObservarComponent;
  let fixture: ComponentFixture<ModalObservarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalObservarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalObservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
