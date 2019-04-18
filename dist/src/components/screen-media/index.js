"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleMatchingScreenSize = styleMatchingScreenSize;
exports.withScrollToTop = exports.withResponsiveComponent = exports.screenMedia = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var screenMedia = {
  screenmedias: [],
  biggerThan: function biggerThan(width) {
    var matched = this.screenmedias.filter(function (s) {
      return s.width === width;
    });

    if (matched.length) {
      return matched[0].media.matches;
    }

    var scm = {
      width: width,
      media: window.matchMedia("(min-width: ".concat(width, "px)"))
    };
    this.screenmedias.push(scm);
    return scm.media.matches;
  },
  getScreenStyle: function getScreenStyle(defaultStyle, specificStyle, target, name, namedState) {
    if (!target.computedStyles) {
      target.computedStyles = [];
    }

    var cStyle = null;

    if (namedState && target[namedState]) {
      cStyle = target.computedStyles[name + "_" + namedState];
    } else {
      cStyle = target.computedStyles[name];
    }

    if (cStyle) {
      return cStyle;
    }

    if (specificStyle) {
      if (defaultStyle) {
        cStyle = Object.assign({}, defaultStyle, specificStyle);
      } else {
        cStyle = specificStyle;
      }
    } else {
      cStyle = defaultStyle;
    }

    if (namedState && target[namedState]) {
      var namedStyle = target.computedStyles[name + "_" + namedState];

      if (namedStyle) {
        return namedStyle;
      }

      namedStyle = Object.assign({}, cStyle, target[namedState]);
      target.computedStyles[name + "_" + namedState] = namedStyle;
      return namedStyle;
    } else {
      target.computedStyles[name] = cStyle;
      return cStyle;
    }
  }
};
exports.screenMedia = screenMedia;

function styleMatchingScreenSize(namedState) {
  if (this.bigScreen) {
    if (screenMedia.biggerThan(1440)) {
      return screenMedia.getScreenStyle(this.default, this.bigScreen, this, "bigScreen", namedState);
    }
  }

  if (this.screen1245) {
    if (screenMedia.biggerThan(1245)) {
      return screenMedia.getScreenStyle(this.default, this.screen1245, this, "screen1245", namedState);
    }
  }

  if (this.screen1080) {
    if (screenMedia.biggerThan(1080)) {
      return screenMedia.getScreenStyle(this.default, this.screen1080, this, "screen1080", namedState);
    }
  }

  if (this.smallScreen) {
    if (screenMedia.biggerThan(800)) {
      return screenMedia.getScreenStyle(this.default, this.smallScreen, this, "smallScreen", namedState);
    }
  }

  if (this.desktop) {
    if (screenMedia.biggerThan(600)) {
      return screenMedia.getScreenStyle(this.default, this.desktop, this, "desktop", namedState);
    }
  }

  if (this.narrowMobile) {
    if (!screenMedia.biggerThan(361)) {
      return screenMedia.getScreenStyle(this.default, this.narrowMobile, this, "narrowMobile", namedState);
    }
  }

  if (this.mobile) {
    if (!screenMedia.biggerThan(600)) {
      return screenMedia.getScreenStyle(this.default, this.mobile, this, "mobile", namedState);
    }
  }

  if (namedState) {
    return screenMedia.getScreenStyle(this.default, this.default, this, "default", namedState);
  } else {
    return this.default;
  }
}

var withResponsiveComponent = function withResponsiveComponent(WrappedComponent, data) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.onWindowResize = _this.onWindowResize.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener("resize", this.onWindowResize);
          this.scrollTo(data);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.onWindowResize);
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          this.forceUpdate();
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedComponent, _extends({
            screenMedia: screenMedia
          }, this.props));
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(data) {
          if (data && data.scrollTo) {
            var elmnt = document.getElementById(data.scrollTo);

            if (elmnt) {
              window.scrollBy({
                top: -70,
                behavior: "smooth"
              });
              elmnt.scrollIntoView();
            }
          }
        }
      }]);

      return _class;
    }(_react.default.Component)
  );
};

exports.withResponsiveComponent = withResponsiveComponent;

var withScrollToTop = function withScrollToTop(WrappedComponent, scrollTo) {
  return (
    /*#__PURE__*/
    function (_React$Component2) {
      _inherits(_class2, _React$Component2);

      function _class2() {
        _classCallCheck(this, _class2);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
      }

      _createClass(_class2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.scrollTo(scrollTo);
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(elementId) {
          var elmnt = document.getElementById(elementId);

          if (elmnt) {
            window.scrollBy({
              top: -70,
              behavior: "smooth"
            });
            elmnt.scrollIntoView();
          }
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return _class2;
    }(_react.default.Component)
  );
};

exports.withScrollToTop = withScrollToTop;

//# sourceMappingURL=index.js.map