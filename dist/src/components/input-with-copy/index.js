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

var _clipboardCopyButton = require('../clipboard-copy-button');

var _clipboardCopyButton2 = _interopRequireDefault(_clipboardCopyButton);

var _inputWithLabel = require('../input-with-label');

var _inputWithLabel2 = _interopRequireDefault(_inputWithLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputWithCopy = function (_Component) {
  _inherits(InputWithCopy, _Component);

  function InputWithCopy() {
    _classCallCheck(this, InputWithCopy);

    return _possibleConstructorReturn(this, (InputWithCopy.__proto__ || Object.getPrototypeOf(InputWithCopy)).apply(this, arguments));
  }

  _createClass(InputWithCopy, [{
    key: 'getStyles',
    value: function getStyles() {
      var styles = {
        container: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%"

        },
        buttonContainer: {
          position: "relative",
          top: 10
        }

      };
      return styles;
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.getStyles();

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(_inputWithLabel2.default, this.props),
        this.renderCopyButton(styles)
      );
    }
  }, {
    key: 'renderCopyButton',
    value: function renderCopyButton(styles) {
      if (this.props.value) {
        return _react2.default.createElement(
          'div',
          { style: styles.buttonContainer },
          _react2.default.createElement(_clipboardCopyButton2.default, { copyFieldId: this.props.id })
        );
      } else {
        return null;
      }
    }
  }]);

  return InputWithCopy;
}(_react.Component);

exports.default = InputWithCopy;


InputWithCopy.propTypes = {
  id: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onSelected: _propTypes2.default.func,
  styles: _propTypes2.default.object,
  help: _propTypes2.default.string
};
InputWithCopy.defaultProps = {
  type: "text"
};

//# sourceMappingURL=index.js.map