import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddAddressComponent } from './customer-add-address.component';

describe('CustomerAddAddressComponent', () => {
  let component: CustomerAddAddressComponent;
  let fixture: ComponentFixture<CustomerAddAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
