import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGenerationContainerComponent } from './email-generation-container.component';

describe('EmailGenerationContainerComponent', () => {
  let component: EmailGenerationContainerComponent;
  let fixture: ComponentFixture<EmailGenerationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailGenerationContainerComponent]
    });
    fixture = TestBed.createComponent(EmailGenerationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
