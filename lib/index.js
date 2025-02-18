"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Changelly = void 0;
const api_1 = require("./api");
class Changelly {
    uri;
    apiKey;
    apiSecret;
    constructor(apiKey, apiSecret, uri) {
        if (!apiKey)
            throw Error('Missing api-key');
        if (!apiSecret)
            throw Error('Missing api-secret');
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.uri = uri || 'https://api.changelly.com';
    }
    /**
     * Returns a list of enabled currencies as a flat array.
     */
    async getCurrencies() {
        return await this.postAPI('getCurrencies');
    }
    /**
     * Returns a full list of currencies as an array of objects.
     * Each object has an "enabled" field displaying current availability of a coin.
     */
    async getCurrenciesFull() {
        return await this.postAPI('getCurrenciesFull');
    }
    /**
     * Returns a minimum allowed payin amount required for a currency pair.
     * Amounts less than a minimal will most likely fail the transaction.
     */
    async getMinAmount(from, to) {
        const params = { from, to };
        return await this.postAPI('getMinAmount', params);
    }
    /**
     * Fetch minimal and maximal amount for current pair.
     */
    async getPairsParams(pairs) {
        return await this.postAPI('getPairsParams', pairs);
    }
    /**
     * Returns estimated exchange values with your API partner fee included.
     */
    async getExchangeAmount(pairs) {
        return await this.postAPI('getExchangeAmount', pairs);
    }
    /**
     * Returns if a given address is valid or not for a given currency.
     */
    async validateAddress(currency, address) {
        const params = { currency, address };
        return await this.postAPI('validateAddress', params);
    }
    /**
     * Creates a new transaction, generates a pay-in address and
     * returns Transaction object with an ID field to track a transaction status.
     */
    async createTransaction(from, to, address, amount, extraId = null, refundAddress = null, refundExtraId = null) {
        const params = { from, to, address, amount, extraId, refundAddress, refundExtraId };
        return await this.postAPI('createTransaction', params);
    }
    /**
     * Returns fix rate for target pairs associate with rateId that can be used for 30 seconds
     */
    async getFixRateForAmount(pairs) {
        return await this.postAPI('getFixRateForAmount', pairs);
    }
    /**
     * Returns fix rate for target pairs associate with rateId that can be used for 2 minutes
     */
    async getFixRate(pairs) {
        return await this.postAPI('getFixRate', pairs);
    }
    /**
     * Returns rate for all available currency pairs associate with rateId that can be used for 2 minutes
     */
    async getFixRateBulk() {
        return await this.postAPI('getFixRateBulk');
    }
    /**
     * Create fix rate transaction. Only provide one of (amountFrom, amountTo)
     */
    async createFixTransaction(from, to, address, rateId, refundAddress, amountFrom = null, amountTo = null, extraId = null, refundExtraId = null) {
        if (amountFrom && amountTo)
            throw new Error('Only specify one of amountTo or amountFrom');
        const params = amountFrom
            ? this.uri.includes('changehero')
                // Changehero use param amount instead of amount From
                ? { from, to, address, amount: amountFrom, rateId, refundAddress, extraId, refundExtraId }
                : { from, to, address, amountFrom, rateId, refundAddress, extraId, refundExtraId }
            : { from, to, address, amountTo, rateId, refundAddress, extraId, refundExtraId };
        return await this.postAPI('createFixTransaction', params);
    }
    /**
     * Returns status of a given transaction using a transaction ID provided.
     */
    async getStatus(id) {
        const params = { id };
        return await this.postAPI('getStatus', params);
    }
    /**
     * Returns an array of all transactions or a filtered list of transactions
     */
    async getTransactions(filter) {
        return await this.postAPI('getTransactions', filter);
    }
    /**
     * Sign params and post to Changelly server
     */
    async postAPI(method, params = {}) {
        return await (0, api_1.request)(this.uri, method, params, this.apiKey, this.apiSecret);
    }
}
exports.Changelly = Changelly;
