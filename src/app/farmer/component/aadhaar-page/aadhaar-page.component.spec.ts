import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhaarPageComponent } from './aadhaar-page.component';

describe('AadhaarPageComponent', () => {
  let component: AadhaarPageComponent;
  let fixture: ComponentFixture<AadhaarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadhaarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadhaarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
