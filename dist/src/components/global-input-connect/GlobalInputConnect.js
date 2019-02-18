"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _globalInputMessage = require("global-input-message");

var _cloneDeep = require("lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _displayQrcode = require("../display-qrcode");

var _displayQrcode2 = _interopRequireDefault(_displayQrcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalInputConnect = function (_Component) {
  _inherits(GlobalInputConnect, _Component);

  function GlobalInputConnect(props) {
    _classCallCheck(this, GlobalInputConnect);

    var _this = _possibleConstructorReturn(this, (GlobalInputConnect.__proto__ || Object.getPrototypeOf(GlobalInputConnect)).call(this, props));

    _this.RENDER_TYPE = {
      ERROR: 0,
      CONNECTING: 1,
      CONNECTED: 2,
      SENDER_CONNECTED: 3,
      SENDER_DISCONNECTED: 4
    };
    _this.defaultMobileConfig = {
      initData: {
        action: "input",
        dataType: "form",
        form: {
          id: "test@globalinput.co.uk",
          title: "GlobalInputConnect is invoked without parameters",
          label: "globalinputtest",
          fields: []
        }
      }

    };

    _this.state = _this.buildConnectingState(_this.props);
    _this.connector = null;
    return _this;
  }

  _createClass(GlobalInputConnect, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.mobileConfig != this.props.mobileConfig) {
        this.setState(this.buildConnectingState(nextProps));
        this.connectGlobalInputApp();
      }
    }
  }, {
    key: "onGlobalInputConnected",
    value: function onGlobalInputConnected() {
      this.setState(this.buildConnectedState());
    }
  }, {
    key: "buildConnectingState",
    value: function buildConnectingState(props) {
      var _this2 = this;

      if (!props.mobileConfig) {
        return {
          renderType: this.RENDER_TYPE.ERROR,
          message: "GlobalInputConnect component requires mobileConfig parameter."
        };
      } else if (!props.mobileConfig.initData) {
        return {
          renderType: this.RENDER_TYPE.ERROR,
          message: "initData is missing in the parameter mobileConfig in the GlobalInputConnect component"
        };
      } else if (!props.mobileConfig.initData.form) {
        return {
          renderType: this.RENDER_TYPE.ERROR,
          message: "form is missing in initData of the mobileConfig in the GlobalInputConnect component"
        };
      }
      this.mobileConfig = (0, _cloneDeep2.default)(this.props.mobileConfig);
      this.mobileConfig.onRegistered = function (next) {
        next();
        _this2.onGlobalInputConnected();
      };
      this.mobileConfig.onSenderConnected = function (sender, senders) {
        if (_this2.props.mobileConfig.onSenderConnected) {
          _this2.props.mobileConfig.onSenderConnected(sender, senders);
        }
        _this2.setState(_this2.buildSenderConnectedState(sender, senders));
      };
      this.mobileConfig.onSenderDisconnected = function (sender, senders) {
        if (!_this2.props.MultiSenders) {
          _this2.disconnectGlobaInputApp();
        }
        try {
          if (_this2.props.mobileConfig.onSenderDisconnected) {
            _this2.props.mobileConfig.onSenderDisconnected(sender, senders);
          }
        } catch (error) {
          console.error(error);
        }

        _this2.setState(_this2.buildSenderDisconnectedState(sender, senders));
      };

      return {
        renderType: this.RENDER_TYPE.CONNECTING
      };
    }
  }, {
    key: "buildConnectedState",
    value: function buildConnectedState() {
      return {
        renderType: this.RENDER_TYPE.CONNECTED,
        code: this.connector.buildInputCodeData()
      };
    }
  }, {
    key: "buildSenderConnectedState",
    value: function buildSenderConnectedState(sender, senders) {
      return {
        renderType: this.RENDER_TYPE.SENDER_CONNECTED,
        sender: sender,
        senders: senders
      };
    }
  }, {
    key: "buildSenderDisconnectedState",
    value: function buildSenderDisconnectedState(sender, senders) {
      return {
        renderType: this.RENDER_TYPE.SENDER_DISCONNECTED,
        sender: sender,
        senders: senders
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.connectGlobalInputApp();
    }
  }, {
    key: "disconnectGlobaInputApp",
    value: function disconnectGlobaInputApp() {
      this.connector.disconnect();
      this.connector = null;
    }
  }, {
    key: "connectGlobalInputApp",
    value: function connectGlobalInputApp() {
      if (this.connector) {
        this.disconnectGlobaInputApp();
      }
      this.connector = (0, _globalInputMessage.createMessageConnector)();
      if (this.props.mobileConfig) {
        this.connector.connect(this.mobileConfig);
      }
    }
  }, {
    key: "sendInputMessage",
    value: function sendInputMessage(message, fieldIndex, fieldId) {
      if (this.connector) {
        this.connector.sendInputMessage(message, fieldIndex, fieldId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.renderType === this.RENDER_TYPE.ERROR) {
        return this.renderError();
      } else if (this.state.renderType === this.RENDER_TYPE.CONNECTED) {
        return this.renderConnected();
      } else if (this.state.renderType === this.RENDER_TYPE.SENDER_CONNECTED) {
        return this.renderSenderConnected();
      } else if (this.state.renderType === this.RENDER_TYPE.SENDER_DISCONNECTED) {
        return this.renderSenderDisconnected();
      } else {
        return this.renderConnecting();
      }
    }
  }, {
    key: "renderError",
    value: function renderError() {

      return _react2.default.createElement(_displayQrcode2.default, { code: this.state.message, label: this.state.message });
    }
  }, {
    key: "renderConnecting",
    value: function renderConnecting() {
      if (this.props.connectingMessage) {
        return _react2.default.createElement(
          "div",
          null,
          this.props.connectingMessage
        );
      } else {
        return null;
      }
    }
  }, {
    key: "renderSenderConnected",
    value: function renderSenderConnected() {
      if (this.props.renderSenderConnected) {
        return this.props.renderSenderConnected(this.state.sender, this.state.senders);
      } else if (this.props.senderConnectedMessage) {
        return _react2.default.createElement(
          "div",
          null,
          this.props.senderConnectedMessage
        );
      } else if (this.props.children) {
        return this.props.children;
      } else {
        return null;
      }
    }
  }, {
    key: "renderSenderDisconnected",
    value: function renderSenderDisconnected() {
      if (this.props.renderSenderDisconnected) {
        return this.props.renderSenderDisconnected(this.state.sender, this.state.senders);
      } else if (this.props.senderDisconnectedMessage) {
        return _react2.default.createElement(
          "div",
          null,
          this.props.senderDisconnectedMessage
        );
      } else if (this.props.children) {
        return this.props.children;
      } else {
        return null;
      }
    }
  }, {
    key: "renderConnected",
    value: function renderConnected() {
      console.log("[[" + this.state.code + "]]");
      return _react2.default.createElement(_displayQrcode2.default, { code: this.state.code, label: this.props.connectedMessage });
    }
  }]);

  return GlobalInputConnect;
}(_react.Component);

exports.default = GlobalInputConnect;

//# sourceMappingURL=GlobalInputConnect.js.map