'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('bootstrap/dist/css/bootstrap.min.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputWithLabel = function (_Component) {
  _inherits(InputWithLabel, _Component);

  function InputWithLabel() {
    _classCallCheck(this, InputWithLabel);

    return _possibleConstructorReturn(this, (InputWithLabel.__proto__ || Object.getPrototypeOf(InputWithLabel)).apply(this, arguments));
  }

  _createClass(InputWithLabel, [{
    key: 'getStyles',
    value: function getStyles() {
      var styles = {
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
        },
        field: {
          width: "100%",
          fontSize: "1vw",
          color: "#5291CD"
        },

        label: {
          fontSize: "1vw",
          color: "#4880ED",
          minWidth: 100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        },
        help: {
          fontSize: 10,
          color: "#5291CD",
          paddingLeft: "3vw",
          paddingRight: "3vw"
        }
      };

      return styles;
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.getStyles();
      if (this.props.type === "textarea") {
        return this.renderTextArea(styles);
      } else {
        return this.renderTextInput(styles);
      }
    }
  }, {
    key: 'renderTextInput',
    value: function renderTextInput(styles) {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'form-group', style: styles.container },
        _react2.default.createElement('input', { className: 'form-control active',
          id: this.props.id,
          type: this.props.type,
          style: styles.field,
          readOnly: this.props.readOnly,
          onChange: function onChange(evt) {
            if (_this2.props.onChange) {
              _this2.props.onChange(evt.target.value, _this2.props.id);
            }
          }, value: this.props.value, required: true }),
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.id, className: 'form-control-placeholder', onClick: this.labelClicked.bind(this) },
          _react2.default.createElement(
            'span',
            { style: styles.label },
            this.props.label
          )
        ),
        this.renderHelp(styles)
      );
    }
  }, {
    key: 'renderTextArea',
    value: function renderTextArea(styles) {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'form-group', style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.label },
          this.props.label
        ),
        _react2.default.createElement('textarea', { className: 'form-control',
          id: this.props.id,
          type: this.props.type,
          style: styles.field,
          readOnly: this.props.readOnly,
          rows: '6',
          onChange: function onChange(evt) {
            if (_this3.props.onChange) {
              _this3.props.onChange(evt.target.value, _this3.props.id);
            }
          }, value: this.props.value, required: true })
      );
    }
  }, {
    key: 'renderHelp',
    value: function renderHelp(styles) {
      if (this.props.help) {
        return _react2.default.createElement(
          'div',
          { style: styles.help },
          this.props.help
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'labelClicked',
    value: function labelClicked() {
      document.getElementById(this.props.id).focus();
    }
  }]);

  return InputWithLabel;
}(_react.Component);

exports.default = InputWithLabel;


InputWithLabel.propTypes = {
  id: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  styles: _propTypes2.default.object,
  help: _propTypes2.default.string
};
InputWithLabel.defaultProps = {
  type: "text"
};

//# sourceMappingURL=index.js.map