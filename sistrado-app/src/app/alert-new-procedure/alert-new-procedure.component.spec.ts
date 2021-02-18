import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertNewProcedureComponent } from './alert-new-procedure.component';

describe('AlertNewProcedureComponent', () => {
  let component: AlertNewProcedureComponent;
  let fixture: ComponentFixture<AlertNewProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertNewProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertNewProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
