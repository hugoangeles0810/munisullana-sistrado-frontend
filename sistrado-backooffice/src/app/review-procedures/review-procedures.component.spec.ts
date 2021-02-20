import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProceduresComponent } from './review-procedures.component';

describe('ReviewProceduresComponent', () => {
  let component: ReviewProceduresComponent;
  let fixture: ComponentFixture<ReviewProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
