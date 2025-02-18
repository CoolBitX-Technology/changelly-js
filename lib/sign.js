"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signMessage = void 0;
const crypto_1 = __importDefault(require("crypto"));
const signMessage = (message, apiSecret) => {
    return crypto_1.default.createHmac('sha512', apiSecret)
        .update(JSON.stringify(message))
        .digest('hex');
};
exports.signMessage = signMessage;
