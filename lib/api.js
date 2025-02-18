"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const sign_1 = require("./sign");
const request = async (uri, method, params, apiKey, apiSecret) => {
    const message = constructMessage(method, params);
    const headers = getHeaders(apiKey, apiSecret, message);
    const res = await fetch(uri, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(message)
    });
    if (res.status !== 200) {
        let text = await res.text();
        throw text;
    }
    else {
        let jsonRes = await res.json();
        if (jsonRes.error)
            throw jsonRes.error;
        return jsonRes.result;
    }
};
exports.request = request;
const constructMessage = (method, params) => {
    const id = Date.now().toString(); // use date.now as unique id for each request
    const message = {
        jsonrpc: "2.0",
        id,
        method,
        params,
    };
    return message;
};
const getHeaders = (apiKey, apiSecret, message) => {
    const sign = (0, sign_1.signMessage)(message, apiSecret);
    const headers = {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'sign': sign
    };
    return headers;
};
