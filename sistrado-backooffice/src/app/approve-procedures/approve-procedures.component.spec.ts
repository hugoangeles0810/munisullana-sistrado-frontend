import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProceduresComponent } from './approve-procedures.component';

describe('ApproveProceduresComponent', () => {
  let component: ApproveProceduresComponent;
  let fixture: ComponentFixture<ApproveProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
