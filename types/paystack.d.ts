export interface PaystackResponse {
  reference: string;
  status: string;
  message: string;
  trans: string;
  transaction: string;
  trxref: string;
}

export interface PaystackHandler {
  openIframe: () => void;
}

export interface PaystackPop {
  setup: (options: {
    key: string;
    email: string;
    amount: number;
    currency: string;
    ref: string;
    callback: (response: PaystackResponse) => void;
    onClose: () => void;
  }) => PaystackHandler;
}
