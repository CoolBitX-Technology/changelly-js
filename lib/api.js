"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sign = require("./sign");

var request =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(uri, method, params, apiKey, apiSecret) {
    var message, headers, res, text, jsonRes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            message = constructMessage(method, params);
            headers = getHeaders(apiKey, apiSecret, message);
            _context.next = 4;
            return fetch(uri, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(message)
            });

          case 4:
            res = _context.sent;

            if (!(res.status !== 200)) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return res.text();

          case 8:
            text = _context.sent;
            throw text;

          case 12:
            _context.next = 14;
            return res.json();

          case 14:
            jsonRes = _context.sent;

            if (!jsonRes.error) {
              _context.next = 17;
              break;
            }

            throw jsonRes.error;

          case 17:
            return _context.abrupt("return", jsonRes.result);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function request(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

exports.request = request;

var constructMessage = function constructMessage(method, params) {
  var id = Date.now().toString(); // use date.now as unique id for each request

  var message = {
    jsonrpc: "2.0",
    id: id,
    method: method,
    params: params
  };
  return message;
};

var getHeaders = function getHeaders(apiKey, apiSecret, message) {
  var sign = (0, _sign.signMessage)(message, apiSecret);
  var headers = {
    'Content-Type': 'application/json',
    'api-key': apiKey,
    'sign': sign
  };
  return headers;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGkudHMiXSwibmFtZXMiOlsicmVxdWVzdCIsInVyaSIsIm1ldGhvZCIsInBhcmFtcyIsImFwaUtleSIsImFwaVNlY3JldCIsIm1lc3NhZ2UiLCJjb25zdHJ1Y3RNZXNzYWdlIiwiaGVhZGVycyIsImdldEhlYWRlcnMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwic3RhdHVzIiwidGV4dCIsImpzb24iLCJqc29uUmVzIiwiZXJyb3IiLCJyZXN1bHQiLCJpZCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsImpzb25ycGMiLCJzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQUcsaUJBQU9DLEdBQVAsRUFBbUJDLE1BQW5CLEVBQWtDQyxNQUFsQyxFQUE4Q0MsTUFBOUMsRUFBNkRDLFNBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxZQUFBQSxPQURlLEdBQ0xDLGdCQUFnQixDQUFDTCxNQUFELEVBQVNDLE1BQVQsQ0FEWDtBQUVmSyxZQUFBQSxPQUZlLEdBRUxDLFVBQVUsQ0FBQ0wsTUFBRCxFQUFTQyxTQUFULEVBQW9CQyxPQUFwQixDQUZMO0FBQUE7QUFBQSxtQkFHSEksS0FBSyxDQUFDVCxHQUFELEVBQU07QUFDM0JDLGNBQUFBLE1BQU0sRUFBRSxNQURtQjtBQUUzQk0sY0FBQUEsT0FBTyxFQUFFQSxPQUZrQjtBQUczQkcsY0FBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsT0FBZjtBQUhxQixhQUFOLENBSEY7O0FBQUE7QUFHZlEsWUFBQUEsR0FIZTs7QUFBQSxrQkFTakJBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBVEU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFVRkQsR0FBRyxDQUFDRSxJQUFKLEVBVkU7O0FBQUE7QUFVZkEsWUFBQUEsSUFWZTtBQUFBLGtCQVdiQSxJQVhhOztBQUFBO0FBQUE7QUFBQSxtQkFjQ0YsR0FBRyxDQUFDRyxJQUFKLEVBZEQ7O0FBQUE7QUFjZkMsWUFBQUEsT0FkZTs7QUFBQSxpQkFlaEJBLE9BQU8sQ0FBQ0MsS0FmUTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFlS0QsT0FBTyxDQUFDQyxLQWZiOztBQUFBO0FBQUEsNkNBaUJaRCxPQUFPLENBQUNFLE1BakJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBwQixPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7Ozs7QUFxQlAsSUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxNQUFELEVBQWdCQyxNQUFoQixFQUErQjtBQUN0RCxNQUFNa0IsRUFBRSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsR0FBV0MsUUFBWCxFQUFYLENBRHNELENBQ3JCOztBQUNqQyxNQUFNbEIsT0FBTyxHQUFHO0FBQ2RtQixJQUFBQSxPQUFPLEVBQUUsS0FESztBQUVkSixJQUFBQSxFQUFFLEVBQUZBLEVBRmM7QUFHZG5CLElBQUFBLE1BQU0sRUFBTkEsTUFIYztBQUlkQyxJQUFBQSxNQUFNLEVBQU5BO0FBSmMsR0FBaEI7QUFNQSxTQUFPRyxPQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxNQUFELEVBQWdCQyxTQUFoQixFQUFrQ0MsT0FBbEMsRUFBa0Q7QUFDbkUsTUFBTW9CLElBQUksR0FBRyx1QkFBWXBCLE9BQVosRUFBcUJELFNBQXJCLENBQWI7QUFDQSxNQUFNRyxPQUFPLEdBQUc7QUFDZCxvQkFBZ0Isa0JBREY7QUFFZCxlQUFXSixNQUZHO0FBR2QsWUFBUXNCO0FBSE0sR0FBaEI7QUFLQSxTQUFPbEIsT0FBUDtBQUNELENBUkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduTWVzc2FnZSB9IGZyb20gJy4vc2lnbidcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSBhc3luYyAodXJpOnN0cmluZywgbWV0aG9kOnN0cmluZywgcGFyYW1zOmFueSwgYXBpS2V5OnN0cmluZywgYXBpU2VjcmV0OnN0cmluZykgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gY29uc3RydWN0TWVzc2FnZShtZXRob2QsIHBhcmFtcylcbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBpS2V5LCBhcGlTZWNyZXQsIG1lc3NhZ2UpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVyaSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWVzc2FnZSlcbiAgfSlcbiAgXG4gIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICBsZXQgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgdGhyb3cgdGV4dDtcbiAgfVxuICBlbHNlIHtcbiAgICBsZXQganNvblJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgaWYoanNvblJlcy5lcnJvcikgdGhyb3cganNvblJlcy5lcnJvclxuICAgIFxuICAgIHJldHVybiBqc29uUmVzLnJlc3VsdDtcbiAgfVxufVxuXG5jb25zdCBjb25zdHJ1Y3RNZXNzYWdlID0gKG1ldGhvZDpzdHJpbmcsIHBhcmFtczphbnkpID0+IHtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCkgLy8gdXNlIGRhdGUubm93IGFzIHVuaXF1ZSBpZCBmb3IgZWFjaCByZXF1ZXN0XG4gIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAganNvbnJwYzogXCIyLjBcIixcbiAgICBpZCxcbiAgICBtZXRob2QsXG4gICAgcGFyYW1zLFxuICB9XG4gIHJldHVybiBtZXNzYWdlXG59XG5cbmNvbnN0IGdldEhlYWRlcnMgPSAoYXBpS2V5OnN0cmluZywgYXBpU2VjcmV0OnN0cmluZywgbWVzc2FnZTphbnkpID0+IHtcbiAgY29uc3Qgc2lnbiA9IHNpZ25NZXNzYWdlKG1lc3NhZ2UsIGFwaVNlY3JldClcbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdhcGkta2V5JzogYXBpS2V5LFxuICAgICdzaWduJzogc2lnblxuICB9XG4gIHJldHVybiBoZWFkZXJzXG59Il19