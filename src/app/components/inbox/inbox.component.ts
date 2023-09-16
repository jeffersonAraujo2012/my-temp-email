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
  mails!: Mail[];
  constructor(private tempMailService: TempEmailService) {}

  ngOnInit() {
    this.mails = this.tempMailService.mails;
    this.fecthMails();
    setInterval(() => {
      this.fecthMails();
    }, 15000);
  }

  fecthMails() {
    this.tempMailService.fetchTheIncomingMail();
    this.mails = this.tempMailService.mails;
    console.log(this.mails);
  }
}
