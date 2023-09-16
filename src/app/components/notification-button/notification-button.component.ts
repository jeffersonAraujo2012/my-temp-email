import { Component } from '@angular/core';
import { TempEmailService } from 'src/app/services/temp-email.service';

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss'],
})
export class NotificationButtonComponent {
  constructor(private tempEmailService: TempEmailService) {}

  get permission(): boolean {
    return this.tempEmailService.notificationPermission;
  }

  togglePermission(): void {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          alert('The notifications have been authorized.');
          this.tempEmailService.notificationPermission =
            !this.tempEmailService.notificationPermission;
        }

        if (permission === 'denied')
          alert(
            "The notifications have not been authorized. However, you can change the permission in your browser's settings and try again."
          );
      });
    } else {
      this.tempEmailService.notificationPermission =
        !this.tempEmailService.notificationPermission;
    }
    console.log(Notification.permission);
  }
}
