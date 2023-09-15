export type IntroduceSessionResponse = {
  introduceSession: {
    id: string;
    expiresAt: Date;
    addresses: [
      {
        address: 'string';
      }
    ];
  };
};
