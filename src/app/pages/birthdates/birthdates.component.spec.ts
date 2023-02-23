import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdatesComponent } from './birthdates.component';

describe('BirthdatesComponent', () => {
  let component: BirthdatesComponent;
  let fixture: ComponentFixture<BirthdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
