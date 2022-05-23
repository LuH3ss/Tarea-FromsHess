import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsHessComponent } from './forms-hess.component';

describe('FormsHessComponent', () => {
  let component: FormsHessComponent;
  let fixture: ComponentFixture<FormsHessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsHessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsHessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
