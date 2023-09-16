import { Component } from '@angular/core';
import { TempEmailService } from '../../services/temp-email.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { TimerService } from 'src/app/services/timer/timer.service';

@Component({
  selector: 'app-email-generation-container',
  templateUrl: './email-generation-container.component.html',
  styleUrls: ['./email-generation-container.component.scss'],
})
export class EmailGenerationContainerComponent {
  autorefreshTimer!: any;
  autorefreshIn: { value: number } = {value: 0};
  totalTime: number = 1;

  constructor(
    private tempEmailService: TempEmailService,
    private timerService: TimerService,
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    this.generateTempEmailSession(true);
  }

  get session() {
    return this.tempEmailService.session;
  }

  async generateTempEmailSession(initial?: boolean) {
    await this.tempEmailService.generateTempEmailSession(initial);
    this.session.introduceSession.expiresAt = new Date(
      this.session.introduceSession.expiresAt
    );

    [this.autorefreshTimer, this.totalTime] = this.timerService.initTimer({
      previousTimer: this.autorefreshTimer,
      expiresAt: this.session.introduceSession.expiresAt,
      timerValue: this.autorefreshIn,
      onFinish: () => {
        this.tempEmailService.selectedMail = null;
        this.tempEmailService.mails = [];
        this.generateTempEmailSession();
      },
    });
  }

  copyEmail(): void {
    this.clipboard.copy(this.session.introduceSession.addresses[0].address);
  }
}
