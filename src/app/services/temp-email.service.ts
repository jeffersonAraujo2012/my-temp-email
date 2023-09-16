import { Injectable } from '@angular/core';
import { environment } from 'environments/environments';
import request, { gql } from 'graphql-request';
import { IntroduceSessionResponse } from '../types/introduce-session-response';
import { FetchMailsResponse, Mail } from '../types/fetch-mails-response';

@Injectable({
  providedIn: 'root',
})
export class TempEmailService {
  session!: IntroduceSessionResponse;
  mails!: Mail[];
  selectedMail: Mail | null = null;

  constructor() {}

  async generateTempEmailSession(initial?: boolean) {
    const localSessionString: string | null =
      localStorage.getItem('temp-mail-session');

    const localSession: IntroduceSessionResponse | null = localSessionString
      ? JSON.parse(localSessionString)
      : null;

    if (initial && localSession) {
      if (
        new Date(localSession.introduceSession.expiresAt).getTime() <=
        new Date().getTime()
      ) {
        await this.generateTempEmailSession();
        return;
      }
      this.session = localSession;
    } else {
      const endpoint = environment.tempEmailApiUri;

      const query = gql`
        mutation {
          introduceSession {
            id
            expiresAt
            addresses {
              address
            }
          }
        }
      `;

      const data = await request<IntroduceSessionResponse>(endpoint, query);
      localStorage.setItem('temp-mail-session', JSON.stringify(data));
      this.session = data;
    }

    await this.fetchTheIncomingMail();
  }

  async fetchTheIncomingMail() {
    const endpoint = environment.tempEmailApiUri;

    const query = gql`
      query {
        session(id: "${this.session?.introduceSession.id}") {
          mails {
            rawSize
            fromAddr
            toAddr
            downloadUrl
            text
            headerSubject
          }
        }
      }
    `;

    const { session } = await request<FetchMailsResponse>(endpoint, query);
    this.mails = session.mails;
  }

  setSelectedMail(mail: Mail | null) {
    this.selectedMail = mail;
  }
}
