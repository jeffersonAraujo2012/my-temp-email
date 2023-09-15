import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-card',
  templateUrl: './mail-card.component.html',
  styleUrls: ['./mail-card.component.scss'],
})
export class MailCardComponent {
  @Input() mailTitle: string = '';
  @Input() mailFrom: string = '';
  @Input() mailInitialText: string = '';
}
