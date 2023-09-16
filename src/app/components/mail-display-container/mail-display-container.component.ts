import { Component } from '@angular/core';
import { TempEmailService } from 'src/app/services/temp-email.service';
import { Mail } from 'src/app/types/fetch-mails-response';

@Component({
  selector: 'app-mail-display-container',
  templateUrl: './mail-display-container.component.html',
  styleUrls: ['./mail-display-container.component.scss'],
})
export class MailDisplayContainerComponent {
  constructor(private tempEmailService: TempEmailService) {}

  getSelectedMail(): Mail | null {
    return this.tempEmailService.selectedMail;
  }
}
