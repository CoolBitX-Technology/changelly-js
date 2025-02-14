export type Pair = {
  from: string;
  to: string;
};

export type PairWithAmount = {
  from: string;
  to: string;
  amountFrom: string;
};

export type PairParam = {
  from: string;
  to: string;
  minAmountFloat: string;
  maxAmountFloat: string;
  minAmountFixed: string;
  maxAmountFixed: string;
};

export type Currency = {
  name: string;
  ticker: string;
  fullName: string;
  enabled: boolean;
  fixRateEnabled: boolean;
  payingConfirmations: number;
  extraIdName: string | null;
  addressUrl: string;
  transactionUrl: string;
  image: string;
  fixedTime: number;
};

export type FixRate = {
  id: string;
  result: string;
  from: string;
  to: string;
  max: string;
  maxFrom: string;
  maxTo: string;
  min: string;
  minFrom: string;
  minTo: string;
};

export type FixRateWithAmount = {
  id: string;
  rate: string;
  from: string;
  to: string;
  amountFrom: string;
  amountTo: string;
};

export type FloatExchangeAmount = {
  from: string;
  to: string;
  networkFee: string;
  amount: string;
  result: string;
  visibleAmount: string;
  rate: string;
  fee: string;
};

export type FloatTransaction = {
  id: string;
  apiExtraFee: string;
  changellyFee: string;
  payinExtraId: string | null;
  payoutExtraId: string | null;
  refundExtraId: string | null;
  amountExpectedFrom: string;
  status: string;
  currencyFrom: string;
  currencyTo: string;
  amountTo: number;
  refundAddress: string;
  amountExpectedTo: string;
  payinAddress: string;
  payoutAddress: string;
  createdAt: string;
  kycRequired: boolean;
};

export type FixTransaction = {
  id: string;
  apiExtraFee: string;
  changellyFee: string;
  payinExtraId: string | null;
  payoutExtraId: string | null;
  refundExtraId: string | null;
  amountExpectedFrom: string;
  status: string;
  currencyFrom: string;
  currencyTo: string;
  amountTo: number;
  refundAddress: string;
  amountExpectedTo: string;
  payTill: string;
  payinAddress: string;
  payoutAddress: string;
  createdAt: string;
  kycRequired: boolean;
};

export type Filter = {
  id?: string;
  currency?: string;
  payoutAddress?: string;
  limit?: number;
  offset?: number;
};

export type TransactionDetail = {
  id: string;
  status: string;
  currencyFrom: string;
  currencyTo: string;
  payinHash: string;
  payoutHash: string;
  refundHash: string | null;
  payinAddress: string;
  payinExtraId: string | null;
  payoutAddress: string;
  payoutExtraId: string | null;
  amountExpectedFrom: string;
  amountExpectedTo: string;
  amountFrom: string;
  amountTo: string;
  refundReason: string | null;
  networkFee: string;
  createdAt: number;
  duration: number;
  transactionType: "fix" | "float";
  payinSenders: string[];
};
