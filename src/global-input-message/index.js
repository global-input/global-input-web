"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMessageConnector = exports.decrypt = exports.encrypt = exports.generatateRandomString = undefined;

var _GlobalInputMessageConnector = require("./GlobalInputMessageConnector");

var _GlobalInputMessageConnector2 = _interopRequireDefault(_GlobalInputMessageConnector);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createMessageConnector = function createMessageConnector() {
  return new _GlobalInputMessageConnector2.default();
};
exports.generatateRandomString = _util.generatateRandomString;
exports.encrypt = _util.encrypt;
exports.decrypt = _util.decrypt;
exports.createMessageConnector = createMessageConnector;