import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitLandingComponent } from './benefit-landing.component';

describe('BenefitLandingComponent', () => {
  let component: BenefitLandingComponent;
  let fixture: ComponentFixture<BenefitLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
