"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Changelly = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _api = require("./api");

var Changelly =
/*#__PURE__*/
function () {
  function Changelly(apiKey, apiSecret, uri) {
    (0, _classCallCheck2["default"])(this, Changelly);
    (0, _defineProperty2["default"])(this, "uri", void 0);
    (0, _defineProperty2["default"])(this, "apiKey", void 0);
    (0, _defineProperty2["default"])(this, "apiSecret", void 0);
    if (!apiKey) throw Error('Missing api-key');
    if (!apiSecret) throw Error('Missing api-secret');
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.uri = uri || 'https://api.changelly.com';
  }
  /**
   * Returns a list of enabled currencies as a flat array.
   */


  (0, _createClass2["default"])(Changelly, [{
    key: "getCurrencies",
    value: function () {
      var _getCurrencies = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.postAPI('getCurrencies');

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCurrencies() {
        return _getCurrencies.apply(this, arguments);
      }

      return getCurrencies;
    }()
    /**
     * Returns a full list of currencies as an array of objects.
     * Each object has an "enabled" field displaying current availability of a coin.
     */

  }, {
    key: "getCurrenciesFull",
    value: function () {
      var _getCurrenciesFull = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.postAPI('getCurrenciesFull');

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCurrenciesFull() {
        return _getCurrenciesFull.apply(this, arguments);
      }

      return getCurrenciesFull;
    }()
    /**
     * Returns a minimum allowed payin amount required for a currency pair.
     * Amounts less than a minimal will most likely fail the transaction.
     */

  }, {
    key: "getMinAmount",
    value: function () {
      var _getMinAmount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(from, to) {
        var params;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = {
                  from: from,
                  to: to
                };
                _context3.next = 3;
                return this.postAPI('getMinAmount', params);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getMinAmount(_x, _x2) {
        return _getMinAmount.apply(this, arguments);
      }

      return getMinAmount;
    }()
    /**
     * Fetch minimal and maximal amount for current pair.
     */

  }, {
    key: "getPairsParams",
    value: function () {
      var _getPairsParams = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(pairs) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.postAPI('getPairsParams', pairs);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPairsParams(_x3) {
        return _getPairsParams.apply(this, arguments);
      }

      return getPairsParams;
    }()
    /**
     * Returns estimated exchange values with your API partner fee included.
     */

  }, {
    key: "getExchangeAmount",
    value: function () {
      var _getExchangeAmount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(pairs) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.postAPI('getExchangeAmount', pairs);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getExchangeAmount(_x4) {
        return _getExchangeAmount.apply(this, arguments);
      }

      return getExchangeAmount;
    }()
    /**
     * Returns if a given address is valid or not for a given currency.
     */

  }, {
    key: "validateAddress",
    value: function () {
      var _validateAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(currency, address) {
        var params;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = {
                  currency: currency,
                  address: address
                };
                _context6.next = 3;
                return this.postAPI('validateAddress', params);

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function validateAddress(_x5, _x6) {
        return _validateAddress.apply(this, arguments);
      }

      return validateAddress;
    }()
    /**
     * Creates a new transaction, generates a pay-in address and
     * returns Transaction object with an ID field to track a transaction status.
     */

  }, {
    key: "createTransaction",
    value: function () {
      var _createTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(from, to, address, amount) {
        var extraId,
            refundAddress,
            refundExtraId,
            params,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                extraId = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : null;
                refundAddress = _args7.length > 5 && _args7[5] !== undefined ? _args7[5] : null;
                refundExtraId = _args7.length > 6 && _args7[6] !== undefined ? _args7[6] : null;
                params = {
                  from: from,
                  to: to,
                  address: address,
                  amount: amount,
                  extraId: extraId,
                  refundAddress: refundAddress,
                  refundExtraId: refundExtraId
                };
                _context7.next = 6;
                return this.postAPI('createTransaction', params);

              case 6:
                return _context7.abrupt("return", _context7.sent);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function createTransaction(_x7, _x8, _x9, _x10) {
        return _createTransaction.apply(this, arguments);
      }

      return createTransaction;
    }()
    /**
     * Returns fix rate for target pairs associate with rateId that can be used for 30 seconds
     */

  }, {
    key: "getFixRateForAmount",
    value: function () {
      var _getFixRateForAmount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(pairs) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.postAPI('getFixRateForAmount', pairs);

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getFixRateForAmount(_x11) {
        return _getFixRateForAmount.apply(this, arguments);
      }

      return getFixRateForAmount;
    }()
    /**
     * Returns fix rate for target pairs associate with rateId that can be used for 2 minutes
     */

  }, {
    key: "getFixRate",
    value: function () {
      var _getFixRate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(pairs) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.postAPI('getFixRate', pairs);

              case 2:
                return _context9.abrupt("return", _context9.sent);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getFixRate(_x12) {
        return _getFixRate.apply(this, arguments);
      }

      return getFixRate;
    }()
    /**
     * Returns rate for all available currency pairs associate with rateId that can be used for 2 minutes
     */

  }, {
    key: "getFixRateBulk",
    value: function () {
      var _getFixRateBulk = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10() {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.postAPI('getFixRateBulk');

              case 2:
                return _context10.abrupt("return", _context10.sent);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getFixRateBulk() {
        return _getFixRateBulk.apply(this, arguments);
      }

      return getFixRateBulk;
    }()
    /**
     * Create fix rate transaction. Only provide one of (amountFrom, amountTo)
     */

  }, {
    key: "createFixTransaction",
    value: function () {
      var _createFixTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(from, to, address, rateId, refundAddress) {
        var amountFrom,
            amountTo,
            extraId,
            refundExtraId,
            params,
            _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                amountFrom = _args11.length > 5 && _args11[5] !== undefined ? _args11[5] : null;
                amountTo = _args11.length > 6 && _args11[6] !== undefined ? _args11[6] : null;
                extraId = _args11.length > 7 && _args11[7] !== undefined ? _args11[7] : null;
                refundExtraId = _args11.length > 8 && _args11[8] !== undefined ? _args11[8] : null;

                if (!(amountFrom && amountTo)) {
                  _context11.next = 6;
                  break;
                }

                throw new Error('Only specify one of amountTo or amountFrom');

              case 6:
                params = amountFrom ? this.uri.includes('changehero') // Changehero use param amount instead of amount From
                ? {
                  from: from,
                  to: to,
                  address: address,
                  amount: amountFrom,
                  rateId: rateId,
                  refundAddress: refundAddress,
                  extraId: extraId,
                  refundExtraId: refundExtraId
                } : {
                  from: from,
                  to: to,
                  address: address,
                  amountFrom: amountFrom,
                  rateId: rateId,
                  refundAddress: refundAddress,
                  extraId: extraId,
                  refundExtraId: refundExtraId
                } : {
                  from: from,
                  to: to,
                  address: address,
                  amountTo: amountTo,
                  rateId: rateId,
                  refundAddress: refundAddress,
                  extraId: extraId,
                  refundExtraId: refundExtraId
                };
                _context11.next = 9;
                return this.postAPI('createFixTransaction', params);

              case 9:
                return _context11.abrupt("return", _context11.sent);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function createFixTransaction(_x13, _x14, _x15, _x16, _x17) {
        return _createFixTransaction.apply(this, arguments);
      }

      return createFixTransaction;
    }()
    /**
     * Returns status of a given transaction using a transaction ID provided.
     */

  }, {
    key: "getStatus",
    value: function () {
      var _getStatus = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(id) {
        var params;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                params = {
                  id: id
                };
                _context12.next = 3;
                return this.postAPI('getStatus', params);

              case 3:
                return _context12.abrupt("return", _context12.sent);

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getStatus(_x18) {
        return _getStatus.apply(this, arguments);
      }

      return getStatus;
    }()
    /**
     * Returns an array of all transactions or a filtered list of transactions
     */

  }, {
    key: "getTransactions",
    value: function () {
      var _getTransactions = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(filter) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.postAPI('getTransactions', filter);

              case 2:
                return _context13.abrupt("return", _context13.sent);

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getTransactions(_x19) {
        return _getTransactions.apply(this, arguments);
      }

      return getTransactions;
    }()
    /**
     * Sign params and post to Changelly server
     */

  }, {
    key: "postAPI",
    value: function () {
      var _postAPI = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(method) {
        var params,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                params = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                _context14.next = 3;
                return (0, _api.request)(this.uri, method, params, this.apiKey, this.apiSecret);

              case 3:
                return _context14.abrupt("return", _context14.sent);

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function postAPI(_x20) {
        return _postAPI.apply(this, arguments);
      }

      return postAPI;
    }()
  }]);
  return Changelly;
}();

exports.Changelly = Changelly;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDaGFuZ2VsbHkiLCJhcGlLZXkiLCJhcGlTZWNyZXQiLCJ1cmkiLCJFcnJvciIsInBvc3RBUEkiLCJmcm9tIiwidG8iLCJwYXJhbXMiLCJwYWlycyIsImN1cnJlbmN5IiwiYWRkcmVzcyIsImFtb3VudCIsImV4dHJhSWQiLCJyZWZ1bmRBZGRyZXNzIiwicmVmdW5kRXh0cmFJZCIsInJhdGVJZCIsImFtb3VudEZyb20iLCJhbW91bnRUbyIsImluY2x1ZGVzIiwiaWQiLCJmaWx0ZXIiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFlYUEsUzs7O0FBS1gscUJBQVlDLE1BQVosRUFBNEJDLFNBQTVCLEVBQStDQyxHQUEvQyxFQUE0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFELFFBQUksQ0FBQ0YsTUFBTCxFQUFhLE1BQU1HLEtBQUssQ0FBQyxpQkFBRCxDQUFYO0FBQ2IsUUFBSSxDQUFDRixTQUFMLEVBQWdCLE1BQU1FLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ2hCLFNBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFHLElBQUksMkJBQWxCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJZSxLQUFLRSxPQUFMLENBQWEsZUFBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2Y7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBS2UsS0FBS0EsT0FBTCxDQUFhLG1CQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZjs7Ozs7Ozs7OztxREFJbUJDLEksRUFBY0MsRTs7Ozs7O0FBQ3pCQyxnQkFBQUEsTSxHQUFTO0FBQUVGLGtCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUMsa0JBQUFBLEVBQUUsRUFBRkE7QUFBUixpQjs7dUJBQ0YsS0FBS0YsT0FBTCxDQUFhLGNBQWIsRUFBNkJHLE1BQTdCLEM7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T0FBTyxFQUFQQSxPQUF4RDtBQUFpRUUsa0JBQUFBLGFBQWEsRUFBYkE7QUFBakUsaUJBSmtCLEdBTXJCO0FBQUVULGtCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUMsa0JBQUFBLEVBQUUsRUFBRkEsRUFBUjtBQUFZSSxrQkFBQUEsT0FBTyxFQUFQQSxPQUFaO0FBQXFCTyxrQkFBQUEsUUFBUSxFQUFSQSxRQUFyQjtBQUErQkYsa0JBQUFBLE1BQU0sRUFBTkEsTUFBL0I7QUFBdUNGLGtCQUFBQSxhQUFhLEVBQWJBLGFBQXZDO0FBQXNERCxrQkFBQUEsT0FBTyxFQUFQQSxPQUF0RDtBQUErREUsa0JBQUFBLGFBQWEsRUFBYkE7QUFBL0QsaUI7O3VCQUNTLEtBQUtWLE9BQUwsQ0FBYSxzQkFBYixFQUFxQ0csTUFBckMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdmOzs7Ozs7Ozs7c0RBR2dCWSxFOzs7Ozs7QUFDUlosZ0JBQUFBLE0sR0FBUztBQUFFWSxrQkFBQUEsRUFBRSxFQUFGQTtBQUFGLGlCOzt1QkFDRixLQUFLZixPQUFMLENBQWEsV0FBYixFQUEwQkcsTUFBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdmOzs7Ozs7Ozs7c0RBR3NCYSxNOzs7Ozs7dUJBQ1AsS0FBS2hCLE9BQUwsQ0FBYSxpQkFBYixFQUFnQ2dCLE1BQWhDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZjs7Ozs7Ozs7O3NEQUdjQyxNOzs7Ozs7O0FBQWdCZCxnQkFBQUEsTSxpRUFBUyxFOzt1QkFDeEIsa0JBQVEsS0FBS0wsR0FBYixFQUFrQm1CLE1BQWxCLEVBQTBCZCxNQUExQixFQUFrQyxLQUFLUCxNQUF2QyxFQUErQyxLQUFLQyxTQUFwRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4vYXBpJztcblxuaW1wb3J0IHtcbiAgUGFpcixcbiAgUGFpcldpdGhBbW91bnQsXG4gIFBhaXJQYXJhbSxcbiAgRml4UmF0ZVdpdGhBbW91bnQsXG4gIEZpeFJhdGUsXG4gIEN1cnJlbmN5LFxuICBGbG9hdFRyYW5zYWN0aW9uLFxuICBGaXhUcmFuc2FjdGlvbixcbiAgRmlsdGVyLFxuICBGbG9hdEV4Y2hhbmdlQW1vdW50XG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlbGx5IHtcbiAgcHVibGljIHJlYWRvbmx5IHVyaTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGFwaUtleTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGFwaVNlY3JldDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFwaUtleTogc3RyaW5nLCBhcGlTZWNyZXQ6IHN0cmluZywgdXJpOiBzdHJpbmcpIHtcbiAgICBpZiAoIWFwaUtleSkgdGhyb3cgRXJyb3IoJ01pc3NpbmcgYXBpLWtleScpO1xuICAgIGlmICghYXBpU2VjcmV0KSB0aHJvdyBFcnJvcignTWlzc2luZyBhcGktc2VjcmV0Jyk7XG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgdGhpcy5hcGlTZWNyZXQgPSBhcGlTZWNyZXQ7XG4gICAgdGhpcy51cmkgPSB1cmkgfHwgJ2h0dHBzOi8vYXBpLmNoYW5nZWxseS5jb20nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIGVuYWJsZWQgY3VycmVuY2llcyBhcyBhIGZsYXQgYXJyYXkuXG4gICAqL1xuICBhc3luYyBnZXRDdXJyZW5jaWVzKCk6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2dldEN1cnJlbmNpZXMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbCBsaXN0IG9mIGN1cnJlbmNpZXMgYXMgYW4gYXJyYXkgb2Ygb2JqZWN0cy5cbiAgICogRWFjaCBvYmplY3QgaGFzIGFuIFwiZW5hYmxlZFwiIGZpZWxkIGRpc3BsYXlpbmcgY3VycmVudCBhdmFpbGFiaWxpdHkgb2YgYSBjb2luLlxuICAgKi9cbiAgYXN5bmMgZ2V0Q3VycmVuY2llc0Z1bGwoKTogUHJvbWlzZTxBcnJheTxDdXJyZW5jeT4+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0QVBJKCdnZXRDdXJyZW5jaWVzRnVsbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtaW5pbXVtIGFsbG93ZWQgcGF5aW4gYW1vdW50IHJlcXVpcmVkIGZvciBhIGN1cnJlbmN5IHBhaXIuXG4gICAqIEFtb3VudHMgbGVzcyB0aGFuIGEgbWluaW1hbCB3aWxsIG1vc3QgbGlrZWx5IGZhaWwgdGhlIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgYXN5bmMgZ2V0TWluQW1vdW50KGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcGFyYW1zID0geyBmcm9tLCB0byB9O1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2dldE1pbkFtb3VudCcsIHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggbWluaW1hbCBhbmQgbWF4aW1hbCBhbW91bnQgZm9yIGN1cnJlbnQgcGFpci5cbiAgICovXG4gIGFzeW5jIGdldFBhaXJzUGFyYW1zKHBhaXJzOiBBcnJheTxQYWlyPik6IFByb21pc2U8QXJyYXk8UGFpclBhcmFtPj4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2dldFBhaXJzUGFyYW1zJywgcGFpcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZXN0aW1hdGVkIGV4Y2hhbmdlIHZhbHVlcyB3aXRoIHlvdXIgQVBJIHBhcnRuZXIgZmVlIGluY2x1ZGVkLlxuICAgKi9cbiAgYXN5bmMgZ2V0RXhjaGFuZ2VBbW91bnQoXG4gICAgcGFpcnM6IEFycmF5PHsgZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nOyBhbW91bnQ6IHN0cmluZyB9PlxuICApOiBQcm9taXNlPEFycmF5PEZsb2F0RXhjaGFuZ2VBbW91bnQ+PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucG9zdEFQSSgnZ2V0RXhjaGFuZ2VBbW91bnQnLCBwYWlycyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiBhIGdpdmVuIGFkZHJlc3MgaXMgdmFsaWQgb3Igbm90IGZvciBhIGdpdmVuIGN1cnJlbmN5LlxuICAgKi9cbiAgYXN5bmMgdmFsaWRhdGVBZGRyZXNzKGN1cnJlbmN5OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8eyByZXN1bHQ6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgY3VycmVuY3ksIGFkZHJlc3MgfTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0QVBJKCd2YWxpZGF0ZUFkZHJlc3MnLCBwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgdHJhbnNhY3Rpb24sIGdlbmVyYXRlcyBhIHBheS1pbiBhZGRyZXNzIGFuZFxuICAgKiByZXR1cm5zIFRyYW5zYWN0aW9uIG9iamVjdCB3aXRoIGFuIElEIGZpZWxkIHRvIHRyYWNrIGEgdHJhbnNhY3Rpb24gc3RhdHVzLlxuICAgKi9cbiAgYXN5bmMgY3JlYXRlVHJhbnNhY3Rpb24oXG4gICAgZnJvbTogc3RyaW5nLFxuICAgIHRvOiBzdHJpbmcsXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFtb3VudDogbnVtYmVyLFxuICAgIGV4dHJhSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIHJlZnVuZEFkZHJlc3M6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIHJlZnVuZEV4dHJhSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IFByb21pc2U8RmxvYXRUcmFuc2FjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgZnJvbSwgdG8sIGFkZHJlc3MsIGFtb3VudCwgZXh0cmFJZCwgcmVmdW5kQWRkcmVzcywgcmVmdW5kRXh0cmFJZCB9O1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2NyZWF0ZVRyYW5zYWN0aW9uJywgcGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZpeCByYXRlIGZvciB0YXJnZXQgcGFpcnMgYXNzb2NpYXRlIHdpdGggcmF0ZUlkIHRoYXQgY2FuIGJlIHVzZWQgZm9yIDMwIHNlY29uZHNcbiAgICovXG4gIGFzeW5jIGdldEZpeFJhdGVGb3JBbW91bnQocGFpcnM6IEFycmF5PFBhaXJXaXRoQW1vdW50Pik6IFByb21pc2U8QXJyYXk8Rml4UmF0ZVdpdGhBbW91bnQ+PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucG9zdEFQSSgnZ2V0Rml4UmF0ZUZvckFtb3VudCcsIHBhaXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZpeCByYXRlIGZvciB0YXJnZXQgcGFpcnMgYXNzb2NpYXRlIHdpdGggcmF0ZUlkIHRoYXQgY2FuIGJlIHVzZWQgZm9yIDIgbWludXRlc1xuICAgKi9cbiAgYXN5bmMgZ2V0Rml4UmF0ZShwYWlyczogQXJyYXk8UGFpcj4pOiBQcm9taXNlPEFycmF5PEZpeFJhdGU+PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucG9zdEFQSSgnZ2V0Rml4UmF0ZScsIHBhaXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJhdGUgZm9yIGFsbCBhdmFpbGFibGUgY3VycmVuY3kgcGFpcnMgYXNzb2NpYXRlIHdpdGggcmF0ZUlkIHRoYXQgY2FuIGJlIHVzZWQgZm9yIDIgbWludXRlc1xuICAgKi9cbiAgYXN5bmMgZ2V0Rml4UmF0ZUJ1bGsoKTogUHJvbWlzZTxBcnJheTxGaXhSYXRlPj4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2dldEZpeFJhdGVCdWxrJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGZpeCByYXRlIHRyYW5zYWN0aW9uLiBPbmx5IHByb3ZpZGUgb25lIG9mIChhbW91bnRGcm9tLCBhbW91bnRUbylcbiAgICovXG4gIGFzeW5jIGNyZWF0ZUZpeFRyYW5zYWN0aW9uKFxuICAgIGZyb206IHN0cmluZyxcbiAgICB0bzogc3RyaW5nLFxuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICByYXRlSWQ6IHN0cmluZyxcbiAgICByZWZ1bmRBZGRyZXNzOiBzdHJpbmcsXG4gICAgYW1vdW50RnJvbTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgYW1vdW50VG86IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGV4dHJhSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIHJlZnVuZEV4dHJhSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IFByb21pc2U8Rml4VHJhbnNhY3Rpb24+IHtcbiAgICBpZiAoYW1vdW50RnJvbSAmJiBhbW91bnRUbykgdGhyb3cgbmV3IEVycm9yKCdPbmx5IHNwZWNpZnkgb25lIG9mIGFtb3VudFRvIG9yIGFtb3VudEZyb20nKTtcbiAgICBjb25zdCBwYXJhbXMgPSBhbW91bnRGcm9tXG4gICAgICA/IHRoaXMudXJpLmluY2x1ZGVzKCdjaGFuZ2VoZXJvJykgXG4gICAgICAgIC8vIENoYW5nZWhlcm8gdXNlIHBhcmFtIGFtb3VudCBpbnN0ZWFkIG9mIGFtb3VudCBGcm9tXG4gICAgICAgID8gIHsgZnJvbSwgdG8sIGFkZHJlc3MsIGFtb3VudDogYW1vdW50RnJvbSwgcmF0ZUlkLCByZWZ1bmRBZGRyZXNzLCBleHRyYUlkLCByZWZ1bmRFeHRyYUlkIH0gXG4gICAgICAgIDogIHsgZnJvbSwgdG8sIGFkZHJlc3MsIGFtb3VudEZyb20sIHJhdGVJZCwgcmVmdW5kQWRkcmVzcywgZXh0cmFJZCwgcmVmdW5kRXh0cmFJZCB9XG5cbiAgICAgIDogeyBmcm9tLCB0bywgYWRkcmVzcywgYW1vdW50VG8sIHJhdGVJZCwgcmVmdW5kQWRkcmVzcywgZXh0cmFJZCwgcmVmdW5kRXh0cmFJZCB9O1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2NyZWF0ZUZpeFRyYW5zYWN0aW9uJywgcGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0YXR1cyBvZiBhIGdpdmVuIHRyYW5zYWN0aW9uIHVzaW5nIGEgdHJhbnNhY3Rpb24gSUQgcHJvdmlkZWQuXG4gICAqL1xuICBhc3luYyBnZXRTdGF0dXMoaWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcGFyYW1zID0geyBpZCB9O1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2dldFN0YXR1cycsIHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgdHJhbnNhY3Rpb25zIG9yIGEgZmlsdGVyZWQgbGlzdCBvZiB0cmFuc2FjdGlvbnNcbiAgICovXG4gIGFzeW5jIGdldFRyYW5zYWN0aW9ucyhmaWx0ZXI6IEZpbHRlcikge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RBUEkoJ2dldFRyYW5zYWN0aW9ucycsIGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogU2lnbiBwYXJhbXMgYW5kIHBvc3QgdG8gQ2hhbmdlbGx5IHNlcnZlclxuICAgKi9cbiAgYXN5bmMgcG9zdEFQSShtZXRob2Q6IHN0cmluZywgcGFyYW1zID0ge30pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KHRoaXMudXJpLCBtZXRob2QsIHBhcmFtcywgdGhpcy5hcGlLZXksIHRoaXMuYXBpU2VjcmV0KTtcbiAgfVxufVxuIl19