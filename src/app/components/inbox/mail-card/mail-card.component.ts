import { Component, Input } from '@angular/core';
import { TempEmailService } from 'src/app/services/temp-email.service';
import { Mail } from 'src/app/types/fetch-mails-response';

@Component({
  selector: 'app-mail-card',
  templateUrl: './mail-card.component.html',
  styleUrls: ['./mail-card.component.scss'],
})
export class MailCardComponent {
  @Input() mailTitle: string = '';
  @Input() mailFrom: string = '';
  @Input() mailInitialText: string = '';
  @Input() mail!: Mail;

  constructor(private tempEmailService: TempEmailService) {}

  selectMail() {
    this.tempEmailService.setSelectedMail(this.mail);
    console.log(this.tempEmailService.selectedMail);
  }
}
