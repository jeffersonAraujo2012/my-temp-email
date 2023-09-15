import { Injectable } from '@angular/core';
import { environment } from 'environments/environments';
import request, { gql } from 'graphql-request';
import { IntroduceSessionResponse } from '../types/introduce-session-response';

@Injectable({
  providedIn: 'root',
})
export class TempEmailService {
  constructor() {}

  async generateTempEmailSession(): Promise<IntroduceSessionResponse> {
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

    return await request<IntroduceSessionResponse>(endpoint, query);
  }
}
