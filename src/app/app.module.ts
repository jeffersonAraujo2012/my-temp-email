import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailGenerationContainerComponent } from './components/email-generation-container/email-generation-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InboxComponent } from './components/inbox/inbox.component';
import { MailCardComponent } from './components/inbox/mail-card/mail-card.component';
import { MailDisplayContainerComponent } from './components/mail-display-container/mail-display-container.component';
import { NotificationButtonComponent } from './components/notification-button/notification-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    EmailGenerationContainerComponent,
    InboxComponent,
    MailCardComponent,
    MailDisplayContainerComponent,
    NotificationButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
