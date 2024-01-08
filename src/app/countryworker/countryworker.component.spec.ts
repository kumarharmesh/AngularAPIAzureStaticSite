import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryworkerComponent } from './countryworker.component';

describe('CountryworkerComponent', () => {
  let component: CountryworkerComponent;
  let fixture: ComponentFixture<CountryworkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryworkerComponent]
    });
    fixture = TestBed.createComponent(CountryworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
