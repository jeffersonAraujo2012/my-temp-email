import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailDisplayContainerComponent } from './mail-display-container.component';

describe('MailDisplayContainerComponent', () => {
  let component: MailDisplayContainerComponent;
  let fixture: ComponentFixture<MailDisplayContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailDisplayContainerComponent]
    });
    fixture = TestBed.createComponent(MailDisplayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
