import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailCardComponent } from './mail-card.component';

describe('MailCardComponent', () => {
  let component: MailCardComponent;
  let fixture: ComponentFixture<MailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailCardComponent]
    });
    fixture = TestBed.createComponent(MailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
