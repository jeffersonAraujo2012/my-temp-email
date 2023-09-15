import { Injectable } from '@angular/core';
import { environment } from 'environments/environments';
import request, { gql } from 'graphql-request';
import { IntroduceSessionResponse } from '../types/introduce-session-response';
import { FetchMailsResponse, Mail } from '../types/fetch-mails-response';

@Injectable({
  providedIn: 'root',
})
export class TempEmailService {
  id: number = Math.random();
  session!: IntroduceSessionResponse;
  mails!: Mail[];

  constructor() {
    console.log(this.id);
  }

  async generateTempEmailSession() {
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
    this.session = data;
    this.fetchTheIncomingMail();
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

    const {session} = await request<FetchMailsResponse>(endpoint, query);
    this.mails = session.mails;
  }
}
