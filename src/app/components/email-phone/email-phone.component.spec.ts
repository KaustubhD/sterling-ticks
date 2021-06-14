import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPhoneComponent } from './email-phone.component';

describe('EmailPhoneComponent', () => {
  let component: EmailPhoneComponent;
  let fixture: ComponentFixture<EmailPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
