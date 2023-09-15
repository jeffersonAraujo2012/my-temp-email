import { Component } from '@angular/core';
import { request, gql } from 'graphql-request';
import { TempEmailService } from '../../services/temp-email.service';
import { IntroduceSessionResponse } from 'src/app/types/introduce-session-response';
import { environment } from 'environments/environments';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-email-generation-container',
  templateUrl: './email-generation-container.component.html',
  styleUrls: ['./email-generation-container.component.scss'],
})
export class EmailGenerationContainerComponent {
  session!: IntroduceSessionResponse;
  autorefreshTimer!: any;
  autorefreshIn: number = 100;
  totalTime!: number;

  constructor(
    private tempEmailService: TempEmailService,
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    this.generateTempEmailSession();
  }

  async generateTempEmailSession() {
    const session = await this.tempEmailService.generateTempEmailSession();
    this.session = session;
    this.session.introduceSession.expiresAt = new Date(
      this.session.introduceSession.expiresAt
    );

    this.initTimer();
  }

  copyEmail(): void {
    this.clipboard.copy(this.session.introduceSession.addresses[0].address);
  }

  private initTimer() {
    clearInterval(this.autorefreshTimer);

    const expiresAt = this.session.introduceSession.expiresAt;

    this.totalTime = Math.floor(
      (expiresAt.getTime() - new Date().getTime()) / 1000
    );

    this.autorefreshTimer = setInterval(() => {
      this.autorefreshIn = Math.floor(
        (expiresAt.getTime() - new Date().getTime()) / 1000
      );

      if (this.autorefreshIn <= 0) {
        console.log("refresh");
        clearInterval(this.autorefreshTimer);
        this.generateTempEmailSession();
        return;
      }
    }, 1000);
  }
}
