"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _qrcode = require("qrcode.react");

var _qrcode2 = _interopRequireDefault(_qrcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayQRCode = function (_Component) {
  _inherits(DisplayQRCode, _Component);

  function DisplayQRCode(props) {
    _classCallCheck(this, DisplayQRCode);

    var _this = _possibleConstructorReturn(this, (DisplayQRCode.__proto__ || Object.getPrototypeOf(DisplayQRCode)).call(this, props));

    _this.onWindowResize = _this.onWindowResize.bind(_this);
    return _this;
  }

  _createClass(DisplayQRCode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.onWindowResize);
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {

      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.onWindowResize);
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      var styles = {
        screen512: null,
        biggerThan512: function biggerThan512() {
          if (!this.screen512) {
            this.screen512 = window.matchMedia("(min-width: 512px)");
          }
          return this.screen512.matches;
        },
        container: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        },
        qrCodeContainer: {
          padding: 5,
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        },
        label: {
          marginTop: 10,
          fontSize: 22,
          color: "#4880ED",
          fontWeight: 300

        }
      };
      return styles;
    }
  }, {
    key: "render",
    value: function render() {
      var styles = this.getStyles();
      var _props = this.props,
          code = _props.code,
          size = _props.size,
          level = _props.level;


      if (!size) {
        var w = window.innerWidth - 50;
        var h = window.innerHeight - 50;
        if (w < h) {
          size = w;
        } else {
          size = h;
        }
        if (size > 400) {
          size = 400;
        }
      } else {
        size = parseInt(size);
      }
      if (!level) {
        level = "H";
      }
      if (!code) {
        code = "";
      }
      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "div",
          { style: styles.qrCodeContainer },
          _react2.default.createElement(_qrcode2.default, {
            value: code,
            level: level,
            size: size
          })
        ),
        _react2.default.createElement(
          "div",
          { style: styles.label },
          this.props.label
        )
      );
    }
  }]);

  return DisplayQRCode;
}(_react.Component);

exports.default = DisplayQRCode;

//# sourceMappingURL=index.js.map