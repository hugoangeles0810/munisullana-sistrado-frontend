import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProceduresComponent } from './pending-procedures.component';

describe('PendingProceduresComponent', () => {
  let component: PendingProceduresComponent;
  let fixture: ComponentFixture<PendingProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
