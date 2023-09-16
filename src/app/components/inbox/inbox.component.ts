import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TempEmailService } from 'src/app/services/temp-email.service';
import { Mail } from 'src/app/types/fetch-mails-response';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent {
  constructor(private tempMailService: TempEmailService) {}

  ngOnInit() {
    this.fecthMails();
    setInterval(() => {
      this.fecthMails();
    }, 15000);
  }

  get mails(): Mail[] {
    return this.tempMailService.mails;
  }

  async fecthMails() {
    await this.tempMailService.fetchTheIncomingMail();
  }
}
