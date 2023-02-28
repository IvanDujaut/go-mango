import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBenefitsComponent } from './client-benefits.component';

describe('ClientBenefitsComponent', () => {
  let component: ClientBenefitsComponent;
  let fixture: ComponentFixture<ClientBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
