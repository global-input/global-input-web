'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inputWithLabel = require('../input-with-label');

var _inputWithLabel2 = _interopRequireDefault(_inputWithLabel);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableInput = function (_Component) {
    _inherits(SelectableInput, _Component);

    function SelectableInput() {
        _classCallCheck(this, SelectableInput);

        return _possibleConstructorReturn(this, (SelectableInput.__proto__ || Object.getPrototypeOf(SelectableInput)).apply(this, arguments));
    }

    _createClass(SelectableInput, [{
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
                checkbox: {
                    position: "relative",
                    width: 30,
                    height: 30,
                    top: 8
                }
            };
            return styles;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styles = this.getStyles();

            return _react2.default.createElement(
                'div',
                { style: styles.container },
                _react2.default.createElement(_inputWithLabel2.default, this.props),
                _react2.default.createElement('input', { type: 'checkbox',
                    style: styles.checkbox,
                    checked: this.props.selected,
                    onChange: function onChange() {
                        if (_this2.props.onSelected) {
                            _this2.props.onSelected();
                        }
                    } })
            );
        }
    }]);

    return SelectableInput;
}(_react.Component);

exports.default = SelectableInput;


SelectableInput.propTypes = {
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

//# sourceMappingURL=index.js.map