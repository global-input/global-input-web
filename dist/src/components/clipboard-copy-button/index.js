"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var textContent = {
  copied: "Content copied to the clipboad",
  missingCopyFieldId: "Missing copyFieldId attribute",
  copyFieldNotFound: "The specified field is not found"
};

var ClipboardCopyButton = function (_React$Component) {
  _inherits(ClipboardCopyButton, _React$Component);

  function ClipboardCopyButton(props) {
    _classCallCheck(this, ClipboardCopyButton);

    var _this = _possibleConstructorReturn(this, (ClipboardCopyButton.__proto__ || Object.getPrototypeOf(ClipboardCopyButton)).call(this, props));

    _this.state = { notificationMessage: null };
    return _this;
  }

  _createClass(ClipboardCopyButton, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.clipboardTimeoutId) {
        clearTimeout(this.clipboardTimeoutId);
        this.clipboardTimeoutId = null;
      }
    }
  }, {
    key: "setNotificationMessage",
    value: function setNotificationMessage(notificationMessage) {
      var _this2 = this;

      this.setState({ notificationMessage: notificationMessage }, function () {
        _this2.clipboardTimeoutId = setTimeout(function () {
          _this2.setState({ notificationMessage: null });
          _this2.clipboardTimeoutId = null;
        }, 2000);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.notificationMessage) {
        return _react2.default.createElement(
          "div",
          { style: _styles.styles.notificationMessage },
          this.state.notificationMessage
        );
      }
      return _react2.default.createElement(
        "button",
        { style: _styles.styles.copyButton, onClick: function onClick() {
            if (!_this3.props.copyFieldId) {
              _this3.setNotificationMessage(textContent.missingCopyFieldId);
            } else {
              var copyElement = document.getElementById(_this3.props.copyFieldId);
              if (!copyElement) {
                _this3.setNotificationMessage(textContent.copyFieldNotFound);
              } else {
                copyElement.select();
                document.execCommand("Copy");
                _this3.setNotificationMessage(textContent.copied);
              }
            }
          } },
        "Copy"
      );
    }
  }]);

  return ClipboardCopyButton;
}(_react2.default.Component);

exports.default = ClipboardCopyButton;

//# sourceMappingURL=index.js.map