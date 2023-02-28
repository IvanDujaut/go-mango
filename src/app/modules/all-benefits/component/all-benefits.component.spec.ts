import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBenefitsComponent } from './all-benefits.component';

describe('AllBenefitsComponent', () => {
  let component: AllBenefitsComponent;
  let fixture: ComponentFixture<AllBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
