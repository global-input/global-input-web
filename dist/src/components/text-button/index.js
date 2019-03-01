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

var TextButton = function (_Component) {
    _inherits(TextButton, _Component);

    function TextButton() {
        _classCallCheck(this, TextButton);

        return _possibleConstructorReturn(this, (TextButton.__proto__ || Object.getPrototypeOf(TextButton)).apply(this, arguments));
    }

    _createClass(TextButton, [{
        key: 'getStyles',
        value: function getStyles() {
            var styles = {
                enabled: {
                    backgroundColor: "#5291CD",
                    borderRadius: 8,
                    border: "3px solid #2281ab",
                    margin: "5vw",
                    color: "white"
                },
                disabled: {
                    backgroundColor: "#888888",
                    color: "white",
                    borderRadius: 8,
                    border: "3px solid #888888",
                    margin: "5vw"
                }

            };

            return styles;
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = this.getStyles();
            if (this.props.disabled) {
                return _react2.default.createElement(
                    'button',
                    { style: styles.disabled, disabled: true },
                    this.props.label
                );
            } else {
                return _react2.default.createElement(
                    'button',
                    { style: styles.enabled, onClick: this.props.onClick },
                    this.props.label
                );
            }
        }
    }]);

    return TextButton;
}(_react.Component);

exports.default = TextButton;


TextButton.propTypes = {
    disabled: _propTypes2.default.bool,
    styles: _propTypes2.default.object,
    label: _propTypes2.default.string
};
TextButton.defaultProps = {
    label: "Ok"
};

//# sourceMappingURL=index.js.map