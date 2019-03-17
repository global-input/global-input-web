"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("./styles");

var _screenMedia = require("../screen-media");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var images = {
  menusymbol: require('./menu-symbol.svg')
};

var MenuItem =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem(props) {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).call(this, props));
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(MenuItem, [{
    key: "onHover",
    value: function onHover() {
      this.setState({
        hover: true
      });
    }
  }, {
    key: "offHover",
    value: function offHover() {
      this.setState({
        hover: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var link = this.props.menu.link;

      if (!link) {
        link = "/";
      }

      var linkText = this.props.menu.linkText;
      var isSelected = this.props.selected && this.props.menu.link === this.props.selected.link;
      var stname = null;

      if (this.state.hover) {
        stname = "hover";
      } else if (isSelected) {
        stname = "selected";
      }

      var menuItemStyle = _styles.styles.menuItem;

      if (this.props.menu.styles && this.props.menu.styles.menuItem) {
        menuItemStyle = this.props.menu.styles.menuItem;
      }

      return _react.default.createElement(_reactRouterDom.Link, {
        to: link,
        style: menuItemStyle.get(stname),
        onMouseEnter: this.onHover.bind(this),
        onMouseLeave: this.offHover.bind(this),
        "data-testid": "top-menu-item"
      }, linkText);
    }
  }]);

  return MenuItem;
}(_react.Component);

var TopMenu =
/*#__PURE__*/
function (_Component2) {
  _inherits(TopMenu, _Component2);

  function TopMenu(props) {
    var _this2;

    _classCallCheck(this, TopMenu);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TopMenu).call(this, props));
    _this2.state = {
      menuPressed: false
    };
    _this2.onWindowResize = _this2.onWindowResize.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(TopMenu, [{
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
    key: "menuPressed",
    value: function menuPressed() {
      this.setState(Object.assign({}, this.state, {
        menuPressed: !this.state.menuPressed
      }));
    }
  }, {
    key: "setMenuPressed",
    value: function setMenuPressed(menuPressed) {
      this.setState(Object.assign({}, this.state, {
        menuPressed: menuPressed
      }));
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      this.setState(Object.assign({}, this.state, {
        menuPressed: false
      }));
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(menu, index) {
      return _react.default.createElement(MenuItem, {
        menu: menu,
        selected: this.props.selected,
        key: index
      });
    }
  }, {
    key: "renderMobileItem",
    value: function renderMobileItem(menu, index) {
      if (menu.button) {
        return null;
      }

      var key = index + "_" + menu.label;
      return _react.default.createElement(MenuItem, {
        menu: menu,
        selected: this.props.selected,
        key: key
      });
    }
  }, {
    key: "renderDesktopSubtitle",
    value: function renderDesktopSubtitle() {
      if (this.props.appSubtitle) {
        return _react.default.createElement("div", {
          style: _styles.styles.subtitleDesktopContaier
        }, this.props.appSubtitle);
      } else {
        return null;
      }
    }
  }, {
    key: "renderMobileSubtitle",
    value: function renderMobileSubtitle() {
      if (this.props.appSubtitle) {
        return _react.default.createElement("div", {
          style: _styles.styles.subtitleMobileContaier
        }, this.props.appSubtitle);
      } else {
        return null;
      }
    }
  }, {
    key: "renderDeskTop",
    value: function renderDeskTop() {
      return _react.default.createElement("div", {
        style: _styles.styles.topnavContainer
      }, _react.default.createElement("div", {
        style: _styles.styles.topnav
      }, _react.default.createElement("a", {
        href: "/"
      }, _react.default.createElement("img", {
        src: this.props.appLogo,
        style: _styles.styles.logo,
        alt: this.props.appLogo
      })), _react.default.createElement("div", {
        style: _styles.styles.appTitleContainer
      }, _react.default.createElement("div", {
        style: _styles.styles.appDesktopTitle
      }, this.props.appTitle), this.renderDesktopSubtitle()), this.renderDesktopMenuItems()));
    }
  }, {
    key: "renderMenuItemSymbol",
    value: function renderMenuItemSymbol() {
      var _this3 = this;

      if (this.state.menuPressed) {
        return _react.default.createElement("a", {
          style: _styles.styles.mobileMenuIcon,
          href: "#b",
          "data-testid": "mobile-to-close-menu",
          onClick: function onClick() {
            _this3.setMenuPressed(false);
          }
        }, "\u2613");
      } else {
        return _react.default.createElement("a", {
          style: _styles.styles.mobileMenuIcon,
          href: "#b",
          "data-testid": "mobile-to-open-menu",
          onClick: function onClick() {
            _this3.setMenuPressed(true);
          }
        }, _react.default.createElement("img", {
          src: images.menusymbol
        }));
      }
    }
  }, {
    key: "renderTransparentSection",
    value: function renderTransparentSection() {
      return _react.default.createElement("a", {
        onClick: this.hideMenu.bind(this),
        href: "#b"
      }, _react.default.createElement("div", {
        style: _styles.styles.mobileMenuOverlay
      }));
    }
  }, {
    key: "renderMobileMenuItems",
    value: function renderMobileMenuItems() {
      if (this.state.menuPressed) {
        return _react.default.createElement("div", {
          style: _styles.styles.menuItemsMobile
        }, this.props.menus.map(this.renderMobileItem.bind(this)), this.renderTransparentSection());
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.menus) {
        return null;
      } else if (_screenMedia.screenMedia.biggerThan(600)) {
        return this.renderDeskTop();
      } else {
        return this.renderMobile();
      }
    }
  }, {
    key: "renderDesktopMenuItems",
    value: function renderDesktopMenuItems() {
      return _react.default.createElement("div", {
        style: _styles.styles.menuItemsDesktop
      }, this.props.menus.map(this.renderMenuItem.bind(this)));
    }
  }, {
    key: "renderMobile",
    value: function renderMobile() {
      return _react.default.createElement("div", {
        style: _styles.styles.topnavContainer
      }, _react.default.createElement("div", {
        style: _styles.styles.topnav
      }, _react.default.createElement("div", {
        style: _styles.styles.mobileMenu
      }, this.renderMenuItemSymbol()), _react.default.createElement("img", {
        src: this.props.appLogo,
        style: _styles.styles.logo,
        alt: this.props.appLogo
      }), _react.default.createElement("div", {
        style: _styles.styles.appTitleContainer
      }, _react.default.createElement("div", {
        style: _styles.styles.appMobileTitle
      }, this.props.appTitle), this.renderMobileSubtitle(), this.reanderMenuButton())), this.renderMobileMenuItems());
    }
  }, {
    key: "reanderMenuButton",
    value: function reanderMenuButton() {
      var buttonMenus = this.props.menus.filter(function (m) {
        return m.button;
      });

      if (!buttonMenus.length) {
        return null;
      }

      return _react.default.createElement(_reactRouterDom.Link, {
        to: buttonMenus[0].link
      }, _react.default.createElement("img", {
        src: buttonMenus[0].button
      }));
    }
  }]);

  return TopMenu;
}(_react.Component);

exports.default = TopMenu;

//# sourceMappingURL=index.js.map