import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewInsurance } from './renew-insurance';

describe('RenewInsurance', () => {
  let component: RenewInsurance;
  let fixture: ComponentFixture<RenewInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewInsurance],
    }).compileComponents();

    fixture = TestBed.createComponent(RenewInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
