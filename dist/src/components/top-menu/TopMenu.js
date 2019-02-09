'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this.state = { hover: false };
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'onHover',
    value: function onHover() {
      this.setState({ hover: true });
    }
  }, {
    key: 'offHover',
    value: function offHover() {
      this.setState({ hover: false });
    }
  }, {
    key: 'render',
    value: function render() {

      var link = this.props.menu.link;
      if (!link) {
        link = "/";
      }
      var linkText = this.props.menu.linkText;
      var isSelected = this.props.selected && this.props.menu.link === this.props.selected.link;

      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: link, style: _styles.styles.menuItem(isSelected, this.state.hover),
          onMouseEnter: this.onHover.bind(this), onMouseLeave: this.offHover.bind(this), 'data-testid': 'top-menu-item' },
        linkText
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

var TopMenu = function (_Component2) {
  _inherits(TopMenu, _Component2);

  function TopMenu(props) {
    _classCallCheck(this, TopMenu);

    var _this2 = _possibleConstructorReturn(this, (TopMenu.__proto__ || Object.getPrototypeOf(TopMenu)).call(this, props));

    _this2.state = { menuPressed: false };
    _this2.mediaQueryChanged = _this2.mediaQueryChanged.bind(_this2);
    return _this2;
  }

  _createClass(TopMenu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'mediaQueryChanged',
    value: function mediaQueryChanged() {
      this.forceUpdate();
    }
  }, {
    key: 'menuPressed',
    value: function menuPressed() {
      this.setState(Object.assign({}, this.state, { menuPressed: !this.state.menuPressed }));
    }
  }, {
    key: 'setMenuPressed',
    value: function setMenuPressed(menuPressed) {
      this.setState(Object.assign({}, this.state, { menuPressed: menuPressed }));
    }
  }, {
    key: 'hideMenu',
    value: function hideMenu() {
      this.setState(Object.assign({}, this.state, { menuPressed: false }));
    }
  }, {
    key: 'renderMenuItem',
    value: function renderMenuItem(menu, index) {
      var key = index + "_" + menu.label;
      return _react2.default.createElement(MenuItem, { menu: menu, selected: this.props.selected, key: key });
    }
  }, {
    key: 'renderDesktopMenuItems',
    value: function renderDesktopMenuItems() {
      return _react2.default.createElement(
        'div',
        { style: _styles.styles.menuItems },
        this.props.menus.map(this.renderMenuItem.bind(this))
      );
    }
  }, {
    key: 'renderDesktopSubtitle',
    value: function renderDesktopSubtitle() {
      if (this.props.appSubtitle) {
        return _react2.default.createElement(
          'div',
          { style: _styles.styles.subtitleDesktopContaier },
          this.props.appSubtitle
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'renderMobileSubtitle',
    value: function renderMobileSubtitle() {
      if (this.props.appSubtitle) {
        return _react2.default.createElement(
          'div',
          { style: _styles.styles.subtitleMobileContaier },
          this.props.appSubtitle
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'renderDeskTop',
    value: function renderDeskTop() {
      return _react2.default.createElement(
        'div',
        { style: _styles.styles.topnavContainer },
        _react2.default.createElement(
          'div',
          { style: _styles.styles.topnav },
          _react2.default.createElement('img', { src: this.props.appLogo, style: _styles.styles.logo, alt: this.props.appLogo }),
          _react2.default.createElement(
            'div',
            { style: _styles.styles.appTitleContainer },
            _react2.default.createElement(
              'div',
              { style: _styles.styles.appDesktopTitle },
              this.props.appTitle
            ),
            this.renderDesktopSubtitle()
          ),
          this.renderDesktopMenuItems()
        )
      );
    }
  }, {
    key: 'renderMobile',
    value: function renderMobile() {

      return _react2.default.createElement(
        'div',
        { style: _styles.styles.topnavContainer },
        _react2.default.createElement(
          'div',
          { style: _styles.styles.topnavmobile },
          _react2.default.createElement('img', { src: this.props.appLogo, style: _styles.styles.logo, alt: this.props.appLogo }),
          _react2.default.createElement(
            'div',
            { style: _styles.styles.appTitleContainer },
            _react2.default.createElement(
              'div',
              { style: _styles.styles.appMobileTitle },
              this.props.appTitle
            ),
            this.renderMobileSubtitle()
          ),
          _react2.default.createElement(
            'div',
            { style: _styles.styles.mobileMenu },
            this.renderMenuItemSymbol()
          )
        ),
        this.renderMobileMenuItems()
      );
    }
  }, {
    key: 'renderMenuItemSymbol',
    value: function renderMenuItemSymbol() {
      var _this3 = this;

      if (this.state.menuPressed) {
        return _react2.default.createElement(
          'a',
          { style: _styles.styles.mobileMenuIcon, href: '#b', 'data-testid': 'mobile-to-close-menu', onClick: function onClick() {
              _this3.setMenuPressed(false);
            } },
          '\u2613'
        );
      } else {
        return _react2.default.createElement(
          'a',
          { style: _styles.styles.mobileMenuIcon, href: '#b', 'data-testid': 'mobile-to-open-menu', onClick: function onClick() {
              _this3.setMenuPressed(true);
            } },
          '\u2630'
        );
      }
    }
  }, {
    key: 'renderTransparentSection',
    value: function renderTransparentSection() {
      return _react2.default.createElement(
        'a',
        { onClick: this.hideMenu.bind(this), href: '#b' },
        _react2.default.createElement('div', { style: _styles.styles.mobileMenuOverlay })
      );
    }
  }, {
    key: 'renderMobileMenuItems',
    value: function renderMobileMenuItems() {
      if (this.state.menuPressed) {
        return _react2.default.createElement(
          'div',
          { style: _styles.styles.menuItemsMobile },
          this.props.menus.map(this.renderMenuItem.bind(this)),
          this.renderTransparentSection()
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.menus) {
        return null;
      } else if (_styles.styles.isDesktop()) {
        return this.renderDeskTop();
      } else {
        return this.renderMobile();
      }
    }
  }]);

  return TopMenu;
}(_react.Component);

exports.default = TopMenu;

//# sourceMappingURL=TopMenu.js.map