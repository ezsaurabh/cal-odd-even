import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalOddEvenComponent } from './cal-odd-even.component';

describe('CalOddEvenComponent', () => {
  let component: CalOddEvenComponent;
  let fixture: ComponentFixture<CalOddEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalOddEvenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalOddEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
