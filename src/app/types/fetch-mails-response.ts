export type FetchMailsResponse = {
  session: {
    mails: Mail[];
  };
};

export type Mail = {
  rawSize: number;
  fromAddr: string;
  toAddr: string;
  downloadUrl: string;
  text: string;
  headerSubject: string;
};
