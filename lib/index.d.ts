import { Pair, PairWithAmount, PairParam, FixRateWithAmount, FixRate, Currency, FloatTransaction, FixTransaction, Filter, FloatExchangeAmount, TransactionDetail } from './types';
export declare class Changelly {
    readonly uri: string;
    private readonly apiKey;
    private readonly apiSecret;
    constructor(apiKey: string, apiSecret: string, uri: string);
    /**
     * Returns a list of enabled currencies as a flat array.
     */
    getCurrencies(): Promise<Array<string>>;
    /**
     * Returns a full list of currencies as an array of objects.
     * Each object has an "enabled" field displaying current availability of a coin.
     */
    getCurrenciesFull(): Promise<Array<Currency>>;
    /**
     * Returns a minimum allowed payin amount required for a currency pair.
     * Amounts less than a minimal will most likely fail the transaction.
     */
    getMinAmount(from: string, to: string): Promise<string>;
    /**
     * Fetch minimal and maximal amount for current pair.
     */
    getPairsParams(pairs: Array<Pair>): Promise<Array<PairParam>>;
    /**
     * Returns estimated exchange values with your API partner fee included.
     */
    getExchangeAmount(pairs: Array<{
        from: string;
        to: string;
        amount: string;
    }>): Promise<Array<FloatExchangeAmount>>;
    /**
     * Returns if a given address is valid or not for a given currency.
     */
    validateAddress(currency: string, address: string): Promise<{
        result: boolean;
    }>;
    /**
     * Creates a new transaction, generates a pay-in address and
     * returns Transaction object with an ID field to track a transaction status.
     */
    createTransaction(from: string, to: string, address: string, amount: number, extraId?: string | null, refundAddress?: string | null, refundExtraId?: string | null): Promise<FloatTransaction>;
    /**
     * Returns fix rate for target pairs associate with rateId that can be used for 30 seconds
     */
    getFixRateForAmount(pairs: Array<PairWithAmount>): Promise<Array<FixRateWithAmount>>;
    /**
     * Returns fix rate for target pairs associate with rateId that can be used for 2 minutes
     */
    getFixRate(pairs: Array<Pair>): Promise<Array<FixRate>>;
    /**
     * Returns rate for all available currency pairs associate with rateId that can be used for 2 minutes
     */
    getFixRateBulk(): Promise<Array<FixRate>>;
    /**
     * Create fix rate transaction. Only provide one of (amountFrom, amountTo)
     */
    createFixTransaction(from: string, to: string, address: string, rateId: string, refundAddress: string, amountFrom?: string | null, amountTo?: string | null, extraId?: string | null, refundExtraId?: string | null): Promise<FixTransaction>;
    /**
     * Returns status of a given transaction using a transaction ID provided.
     */
    getStatus(id: string): Promise<string>;
    /**
     * Returns an array of all transactions or a filtered list of transactions
     */
    getTransactions(filter: Filter): Promise<Array<TransactionDetail>>;
    /**
     * Sign params and post to Changelly server
     */
    postAPI(method: string, params?: {}): Promise<any>;
}
