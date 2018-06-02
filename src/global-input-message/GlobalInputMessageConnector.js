"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = require("socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

var _util = require("./util");

var _codedataUtil = require("./codedataUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalInputMessageConnector = function () {
  _createClass(GlobalInputMessageConnector, [{
    key: "logError",
    value: function logError(message, error) {
      if (error) {
        console.warn(this.client + ":" + message + ":" + error);
        console.warn(error.stack);
      } else {
        console.warn(this.client + ":" + message);
      }
    }
  }]);

  function GlobalInputMessageConnector() {
    _classCallCheck(this, GlobalInputMessageConnector);

    this.apikey = "k7jc3QcMPKEXGW5UC";
    this.securityGroup = "1CNbWCFpsbmRQuKdd";
    this.codeAES = "LNJGw0x5lqnXpnVY8";
    this.session = (0, _util.generatateRandomString)(17);
    this.client = (0, _util.generatateRandomString)(17);
    this.aes = (0, _util.generatateRandomString)(17);
    this.socket = null;
    this.connectedSenders = [];
    this.url = "https://globalinput.co.uk";
  }

  _createClass(GlobalInputMessageConnector, [{
    key: "isConnected",
    value: function isConnected() {
      return this.socket != null;
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.socket) {
        this.socket.disconnect();
        this.socket = null;
      }
      this.targetSession = null;
    }
  }, {
    key: "setCodeAES",
    value: function setCodeAES(codeAES) {
      this.codeAES = codeAES;
    }
  }, {
    key: "connect",
    value: function connect() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.disconnect();

      if (options.apikey) {
        this.apikey = options.apikey;
      }
      if (options.securityGroup) {
        this.securityGroup = options.securityGroup;
      }
      if (options.client) {
        this.client = options.client;
      }

      if (options.url) {
        this.url = options.url;
      }
      if (options.connectSession) {
        this._connectToSocket(options);
      } else {
        var url = this.url + "/global-input/request-socket-url?apikey=" + this.apikey;
        var that = this;
        (0, _util.basicGetURL)(url, function (application) {
          that.url = application.url;
          that._connectToSocket(options);
        }, function () {
          console.warn("failed to get the socket server url");
          if (options.onError) {
            options.onError("failed to get the socket server url");
          }
        });
      }
    }
  }, {
    key: "_connectToSocket",
    value: function _connectToSocket(options) {
      console.log("Copyright © 2017-2022 by Dilshat Hewzulla");
      this.socket = (0, _socket2.default)(this.url);
      var that = this;
      this.socket.on("registerPermission", function (data) {
        that.onRegisterPermission(JSON.parse(data), options);
      });
    }
  }, {
    key: "onRegisterPermission",
    value: function onRegisterPermission(registerPermistion, options) {
      if (registerPermistion.result === "ok") {
        var that = this;
        this.socket.on("registered", function (data) {
          var registeredMessage = JSON.parse(data);
          if (registeredMessage.result === "ok") {
            if (options.onRegistered) {
              options.onRegistered(function () {
                that.onRegistered(registeredMessage, options);
              }, registeredMessage, options);
            } else {
              that.onRegistered(registeredMessage, options);
            }
          } else {
            if (options.onRegisterFailed) {
              options.onRegisterFailed(registeredMessage);
            }
          }
        });
        var registerMessage = {
          securityGroup: this.securityGroup,
          session: this.session,
          client: this.client,
          apikey: this.apikey
        };

        this.socket.emit("register", JSON.stringify(registerMessage));
      } else {
        this.logError("failed to get register permission");
      }
    }
  }, {
    key: "onRegistered",
    value: function onRegistered(registeredMessage, options) {
      var that = this;
      this.socket.on(this.session + "/inputPermission", function (data) {

        that.processInputPermission(JSON.parse(data), options);
      });
      if (options.connectSession) {
        that.socket.on(options.connectSession + "/inputPermissionResult", function (data) {
          that.onInputPermissionResult(JSON.parse(data), options);
        });
        var requestInputPermissionMessage = {
          securityGroup: that.securityGroup,
          session: that.session,
          client: that.client,
          connectSession: options.connectSession
        };
        requestInputPermissionMessage.data = {
          client: that.client,
          time: new Date().getTime()
        };
        requestInputPermissionMessage.data = JSON.stringify(requestInputPermissionMessage.data);
        if (options.aes) {
          requestInputPermissionMessage.data = (0, _util.encrypt)(requestInputPermissionMessage.data, options.aes);
        }

        var data = JSON.stringify(requestInputPermissionMessage);

        this.socket.emit("inputPermision", data);
      }
    }
  }, {
    key: "processInputPermission",
    value: function processInputPermission(inputPermissionMessage, options) {
      if (!inputPermissionMessage.data) {
        this.sendInputPermissionDeniedMessage(inputPermissionMessage, "data is missing in the permision request");
        return;
      }
      try {
        inputPermissionMessage.data = (0, _util.decrypt)(inputPermissionMessage.data, this.aes);
      } catch (error) {
        this.sendInputPermissionDeniedMessage(inputPermissionMessage, "failed to decrypt");
        return;
      }
      if (!inputPermissionMessage.data) {
        this.logError(" failed to decrypt the data in the permission request");
        this.sendInputPermissionDeniedMessage(inputPermissionMessage, "failed to decrypt");
        return;
      }
      try {
        inputPermissionMessage.data = JSON.parse(inputPermissionMessage.data);
      } catch (error) {
        this.logError(error + " while parsing the json data in the permisson request");
        this.sendInputPermissionDeniedMessage(inputPermissionMessage, "data format error in the permisson request");
        return;
      }
      if (inputPermissionMessage.data.client !== inputPermissionMessage.client) {
        this.logError("***the client id mis match in the permission");
        this.sendInputPermissionDeniedMessage(inputPermissionMessage, "client id mismatch");
        return;
      }
      var that = this;

      if (options.onInputPermission) {
        options.onInputPermission(function () {
          delete inputPermissionMessage.data;
          that.grantInputPermission(inputPermissionMessage, options);
        }, function () {
          that.sendInputPermissionDeniedMessage(inputPermissionMessage, "application denied to give permission");
        }, inputPermissionMessage, options);
      } else {
        delete inputPermissionMessage.data;
        this.grantInputPermission(inputPermissionMessage, options);
      }
    }
  }, {
    key: "grantInputPermission",
    value: function grantInputPermission(inputPermissionMessage, options) {
      var _this = this;

      if (this.grantPermissionQueue) {
        this.grantPermissionQueue = this.grantPermissionQueue.filter(function (s) {
          return s.inputPermissionMessage.client !== inputPermissionMessage.client;
        });
        this.grantPermissionQueue.push({ inputPermissionMessage: inputPermissionMessage, options: options });
        this.grantPermissionQueueLastModified = new Date();
        return;
      }
      var existingSameSenders = this.connectedSenders.filter(function (s) {
        return s.client === inputPermissionMessage.client;
      });
      if (existingSameSenders.length > 0) {
        existingSameSenders.forEach(function (s) {
          console.log("Disconnect from the same client");
          _this.disconnectSender(s);
        });
        console.log("the client is  connected previously");
        this.grantPermissionQueue = [];
        this.grantPermissionQueue.push({ inputPermissionMessage: inputPermissionMessage, options: options });
        this.grantPermissionQueueLastModified = new Date();
        setTimeout(this.processGrantInputPermissionQueue.bind(this), 300);
      } else {
        this._grantInputPermission(inputPermissionMessage, options);
      }
    }
  }, {
    key: "processGrantInputPermissionQueue",
    value: function processGrantInputPermissionQueue() {
      var _this2 = this;

      var currentTime = new Date();
      if (currentTime.getTime() - this.grantPermissionQueueLastModified.getTime() < 200) {
        setTimeout(this.processGrantInputPermissionQueue.bind(this), 300);
      } else {
        var grantPermissionQueue = this.grantPermissionQueue;
        this.grantPermissionQueue = null;
        grantPermissionQueue.forEach(function (queitem) {
          _this2._grantInputPermission(queitem.inputPermissionMessage, queitem.options);
        });
      }
    }
  }, {
    key: "_grantInputPermission",
    value: function _grantInputPermission(inputPermissionMessage, options) {
      var inputSender = this.buildInputSender(inputPermissionMessage, options);
      this.connectedSenders.push(inputSender);
      console.log(":::connectedSenders:" + this.connectedSenders.length);
      if (options.onSenderConnected) {
        options.onSenderConnected(inputSender, this.connectedSenders);
      }
      this.socket.on(this.session + "/input", inputSender.onInput);
      this.socket.on(this.session + "/leave", inputSender.onLeave);
      this.sendInputPermissionGrantedMessage(inputPermissionMessage, options);
    }
  }, {
    key: "sendInputPermissionGrantedMessage",
    value: function sendInputPermissionGrantedMessage(inputPermissionMessage, options) {
      var inputPermissionResult = Object.assign({}, inputPermissionMessage);
      if (options.initData) {
        inputPermissionResult.initData = options.initData;
        var inputPermissionResultInString = JSON.stringify(inputPermissionResult.initData);
        if (this.aes) {
          inputPermissionResult.initData = (0, _util.encrypt)(inputPermissionResultInString, this.aes);
        }
      }
      inputPermissionResult.allow = true;
      this.sendInputPermissionResult(inputPermissionResult);
    }
  }, {
    key: "sendInputPermissionDeniedMessage",
    value: function sendInputPermissionDeniedMessage(inputPermissionMessage, reason) {
      inputPermissionMessage.allow = false;
      inputPermissionMessage.reason = reason;
      this.sendInputPermissionResult(inputPermissionMessage);
    }
  }, {
    key: "sendInputPermissionResult",
    value: function sendInputPermissionResult(inputPermissionResult) {
      var data = JSON.stringify(inputPermissionResult);
      this.socket.emit(this.session + "/inputPermissionResult", data);
    }
  }, {
    key: "onInputPermissionResult",
    value: function onInputPermissionResult(inputPermissionResultMessage, options) {
      this.connectSession = options.connectSession;
      this.inputAES = options.aes;
      if (this.inputAES && inputPermissionResultMessage.initData && typeof inputPermissionResultMessage.initData === "string") {
        var descryptedInitData = (0, _util.decrypt)(inputPermissionResultMessage.initData, this.inputAES);
        if (descryptedInitData) {
          try {
            inputPermissionResultMessage.initData = JSON.parse(descryptedInitData);
          } catch (error) {
            console.warn("the service applications responsed with invalid data");
            inputPermissionResultMessage.initData = null;
          }
        } else {
          console.warn("decruption of descryptedInitData  skipped because it is empty");
        }
      } else {
        console.log("the permission may not be granted by the other party");
        inputPermissionResultMessage.initData = null;
      }

      if (this.socket) {
        var receveiverDisconnected = function receveiverDisconnected() {
          var currentTime = new Date().getTime();
          if (!this.latTimeReceiverDisconnected || currentTime - this.latTimeReceiverDisconnected < 200) {
            if (options.onReceiverDisconnected) {
              options.onReceiverDisconnected();
            }
          }
          this.latTimeReceiverDisconnected = currentTime;
        };
        this.socket.on(options.connectSession + "/leave", receveiverDisconnected);
        var inputSender = this.buildInputSender(inputPermissionResultMessage, options);
        this.socket.on(options.connectSession + "/input", inputSender.onInput);
        var that = this;
        this.socket.on(options.connectSession + "/output", function (outputmessage) {
          that.onOutputMessageReceived(outputmessage, options);
        });
      }
      if (options.onInputPermissionResult) {
        options.onInputPermissionResult(inputPermissionResultMessage);
      }
    }
  }, {
    key: "onOutputMessageReceived",
    value: function onOutputMessageReceived(messagedata, options) {
      if (options.onOutputMessageReceived) {
        var message = JSON.parse(messagedata);
        var aes = this.aes;
        if (this.inputAES) {
          aes = this.inputAES;
        }
        if (aes && message.data) {
          message.data = (0, _util.decrypt)(message.data, aes);
        }
        options.onOutputMessageReceived(message);
      } else {
        console.log("output message is ignored");
      }
    }
  }, {
    key: "sendOutputMessage",
    value: function sendOutputMessage(outputMessage) {
      if (!this.isConnected()) {
        console.log("not connected yet");
        return;
      }
      var encryptedMessagedata = (0, _util.encrypt)(JSON.stringify(outputMessage), this.aes);
      var outputMessage = {
        client: this.client,
        data: encryptedMessagedata
      };
      var messageToSent = JSON.stringify(outputMessage);
      this.socket.emit(this.session + "/output", messageToSent);
    }
  }, {
    key: "buildInputSender",
    value: function buildInputSender(inputPermissionMessage, options) {
      var that = this;
      var inputSender = {
        client: inputPermissionMessage.client,
        session: inputPermissionMessage.session,
        onInput: function onInput(data) {

          try {
            var inputMessage = JSON.parse(data);
            if (inputMessage.client === that.client) {
              return;
            }
            var aes = that.aes;
            if (that.inputAES) {
              aes = that.inputAES;
            }
            if (inputMessage.data) {
              var dataDecrypted = null;
              try {
                dataDecrypted = (0, _util.decrypt)(inputMessage.data, aes);
              } catch (error) {
                that.logError(error + ", failed to decrypt the input content");
                return;
              }
              if (!dataDecrypted) {
                that.logError("failed to decrypt the content");
                return;
              }

              try {
                inputMessage.data = JSON.parse(dataDecrypted);
              } catch (error) {
                that.logError(error + "failed to parse the decrypted input content");
              }
            } else if (inputMessage.initData) {
              var dataDecrypted = null;
              try {
                dataDecrypted = (0, _util.decrypt)(inputMessage.initData, aes);
              } catch (error) {
                that.logError(error + ", failed to decrypt the initData content");
                return;
              }
              if (!dataDecrypted) {
                that.logError("failed to decrypt the content");
                return;
              }
              try {
                inputMessage.initData = JSON.parse(dataDecrypted);
              } catch (error) {
                that.logError(error + "failed to parse the decrypted initData content");
              }
            } else {
              that.logError("received input data is not encrypted");
            }
            if (options.onInput) {
              options.onInput(inputMessage);
              return;
            } else {
              that._onInput(inputMessage, options);
            }
          } catch (error) {
            that.logError("error when processing the input message.", error);
          }
        },
        onLeave: function onLeave(data) {
          console.log("On leave message is received:" + data);
          var leaveMessage = JSON.parse(data);
          var matchedSenders = that.connectedSenders.filter(function (s) {
            return s.client === leaveMessage.client;
          });
          if (matchedSenders.length > 0) {
            var inputSenderToLeave = matchedSenders[0];
            that.disconnectSender(inputSenderToLeave);

            if (options.onSenderDisconnected) {
              options.onSenderDisconnected(inputSenderToLeave, that.connectedSenders);
            }
          }
        }

      };
      return inputSender;
    }
  }, {
    key: "disconnectSender",
    value: function disconnectSender(inputSender) {
      try {
        this.socket.removeListener(this.session + "/input", inputSender.onInput);
        this.socket.removeListener(this.session + "/leave", inputSender.onLeave);
      } catch (error) {
        console.error(error);
      }
      this.connectedSenders = this.connectedSenders.filter(function (s) {
        return s.client !== inputSender.client;
      });
      console.log("client disconnected:" + inputSender.client);
    }
  }, {
    key: "_onInput",
    value: function _onInput(inputMessage, options) {
      if (inputMessage.initData) {
        console.log("initData is received");
        if (options.initData && options.initData.operations && options.initData.operations.onInitData) {
          options.initData.operations.onInitData(inputMessage);
        }
        return;
      }

      if (typeof inputMessage.data == "undefined") {
        console.log("data field is missing in the input message");
        return;
      }
      var initData = options.initData;
      if (this.activeInitData) {
        initData = this.activeInitData;
      }
      if (!initData.form || !initData.form.fields) {
        console.log("field is missing in the initData");
        return;
      }
      if (typeof inputMessage.data.index != 'undefined') {
        if (inputMessage.data.index < 0 || initData.form.fields.length <= inputMessage.data.index) {
          console.log("index data is too big in the input message");
          return;
        }
        if (initData.form.fields[inputMessage.data.index].operations && initData.form.fields[inputMessage.data.index].operations.onInput) {
          initData.form.fields[inputMessage.data.index].operations.onInput(inputMessage.data.value);
        } else {
          console.log("onInput operations is not defined in the initData index:" + inputMessage.data.index);
        }
      } else if (typeof inputMessage.data.fieldId != 'undefined') {
        var matchedFields = initData.form.fields.filter(function (f) {
          return f.id === inputMessage.data.fieldId;
        });
        if (matchedFields.length) {
          var matchedField = matchedFields[0];
          if (matchedField.operations && matchedField.operations.onInput) {
            matchedField.operations.onInput(inputMessage.data.value);
          } else {
            console.log("onInput operations is not defined in the initData fieldId:" + inputMessage.data.fieldId);
          }
        } else {
          console.log("reiceved input message is skipped:The field with the matching id does not exists:" + inputMessage.data.fieldId);
        }
      } else {
        console.log("reiceved input message is skipped because it does not have fieldId or index");
      }
    }
  }, {
    key: "sendInitData",
    value: function sendInitData(initData) {
      if (!this.isConnected()) {
        console.log("not connected yet");
        return;
      }
      var aes = this.aes;
      if (this.inputAES) {
        aes = this.inputAES;
      }
      var contentToEncrypt = JSON.stringify(initData);
      var contentEcrypted = (0, _util.encrypt)(contentToEncrypt, aes);

      var message = {
        client: this.client,
        initData: contentEcrypted
      };
      var content = JSON.stringify(message);
      var session = this.session;
      if (this.connectSession) {
        session = this.connectSession;
      }
      this.socket.emit(session + '/input', content);
      this.activeInitData = initData;
    }
  }, {
    key: "sendInputMessage",
    value: function sendInputMessage(value, index, fieldId) {
      if (!this.isConnected()) {
        console.log("not connected yet");
        return;
      }
      var data = {
        id: (0, _util.generatateRandomString)(10),
        value: value
      };
      if (fieldId) {
        data.fieldId = fieldId;
      } else {
        data.index = index;
      }
      var aes = this.aes;
      if (this.inputAES) {
        aes = this.inputAES;
      }
      var contentToEncrypt = JSON.stringify(data);
      var contentEcrypted = (0, _util.encrypt)(contentToEncrypt, aes);
      data = contentEcrypted;
      var message = {
        client: this.client,
        data: data
      };
      var content = JSON.stringify(message);
      var session = this.session;
      if (this.connectSession) {
        session = this.connectSession;
      }
      this.socket.emit(session + '/input', content);
    }
  }, {
    key: "changeGlobalInputFieldData",
    value: function changeGlobalInputFieldData(globalInputdata, data) {
      if (!globalInputdata) {
        console.log(" because globalInputdata is empty");
        return globalInputdata;
      }
      if (data.fieldId) {
        globalInputdata = globalInputdata.map(function (f) {
          if (f.id === data.fieldId) {
            f.value = data.value;
          }
          return f;
        });
      } else if (typeof data.index !== 'undefined' && data.index < globalInputdata.length) {
        var globalInputdata = globalInputdata.slice(0);
        globalInputdata[data.index].value = data.value;
      } else {
        console.warn("receied the data index is bigger that that of initData");
      }
      return globalInputdata;
    }
  }, {
    key: "buildOptionsFromInputCodedata",
    value: function buildOptionsFromInputCodedata(codedata, options) {
      return _codedataUtil.codedataUtil.buildOptionsFromInputCodedata(this, codedata, options);
    }
  }, {
    key: "buildInputCodeData",
    value: function buildInputCodeData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _codedataUtil.codedataUtil.buildInputCodeData(this, data);
    }
  }, {
    key: "buildPairingData",
    value: function buildPairingData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _codedataUtil.codedataUtil.buildPairingData(this, data);
    }
  }, {
    key: "processCodeData",
    value: function processCodeData(encryptedcodedata, options) {
      return _codedataUtil.codedataUtil.processCodeData(this, encryptedcodedata, options);
    }
  }]);

  return GlobalInputMessageConnector;
}();

exports.default = GlobalInputMessageConnector;