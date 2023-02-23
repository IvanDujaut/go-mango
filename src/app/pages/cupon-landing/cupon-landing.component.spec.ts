import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponLandingComponent } from './cupon-landing.component';

describe('CuponLandingComponent', () => {
  let component: CuponLandingComponent;
  let fixture: ComponentFixture<CuponLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuponLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuponLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
