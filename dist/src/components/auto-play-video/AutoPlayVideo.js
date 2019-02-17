"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoPlayVideo = function (_Component) {
  _inherits(AutoPlayVideo, _Component);

  function AutoPlayVideo(props) {
    _classCallCheck(this, AutoPlayVideo);

    var _this = _possibleConstructorReturn(this, (AutoPlayVideo.__proto__ || Object.getPrototypeOf(AutoPlayVideo)).call(this, props));

    _this.RENDER_TYPE = {
      VIDEO: 0,
      IMAGE: 1
    };

    _this.state = _this.buildInitialState(_this.props);
    _this.videoAutoPlayed = false;
    return _this;
  }

  _createClass(AutoPlayVideo, [{
    key: "buildInitialState",
    value: function buildInitialState(props) {
      return { type: this.RENDER_TYPE.VIDEO };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopThreadForAutoPlayPause();
    }
  }, {
    key: "stopThreadForAutoPlayPause",
    value: function stopThreadForAutoPlayPause() {
      if (this.timerHandler) {
        clearTimeout(this.timerHandler);
        this.timerHandler = null;
      }
    }
  }, {
    key: "startThreadForAutoPlayPause",
    value: function startThreadForAutoPlayPause(props) {
      var _this2 = this;

      this.stopThreadForAutoPlayPause();
      this.timerHandler = setInterval(function () {
        _this2.doAutoPlayPause();
      }, 2000);
    }
  }, {
    key: "doAutoPlayPause",
    value: function doAutoPlayPause() {
      if (!this.videoPlayer) {
        return;
      }
      if (this.isElementInViewport(this.videoPlayer)) {
        if (this.videoAutoPlayed) {
          return;
        }
        this.videoAutoPlayed = true;
        if (this.videoPlayer.paused) {
          console.log("autoplayed");
          this.videoPlayer.play();
        } else {
          console.log("stopping autoplay because it is may be played manually");
          this.stopThreadForAutoPlayPause();
        }
      } else {
        if (!this.videoAutoPlayed) {
          return;
        }
        this.videoAutoPlayed = false;
        if (!this.videoPlayer.paused) {
          console.log("autopaused");
          this.videoPlayer.pause();
        } else {
          console.log("stopping autoplay because it is may be paused manually");
          this.stopThreadForAutoPlayPause();
        }
      }
    }
  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      var viewH = window.innerHeight || document.documentElement.clientHeight;
      var viewW = window.innerWidth || document.documentElement.clientWidth;

      var y1 = rect.top;
      var x1 = rect.left;
      var y2 = rect.bottom;
      var x2 = rect.right;
      if (x1 >= 0 && y1 >= 0 && y2 <= viewH && x2 <= viewW) {
        return true;
      } else {
        var midx = (x1 + x2) / 2;
        var midy = (y1 + y2) / 2;
        if (midx >= 0 && midy >= 0 && midy <= viewH && midx <= viewW) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, {
    key: "onAbort",
    value: function onAbort() {
      console.log("onAbort");
      this.setState({ type: this.RENDER_TYPE.ERROR });
      this.stopThreadForAutoPlayPause();
    }
  }, {
    key: "onError",
    value: function onError() {
      console.log("onError");
      this.setState({ type: this.RENDER_TYPE.ERROR });
      this.stopThreadForAutoPlayPause();
    }
  }, {
    key: "onPause",
    value: function onPause() {
      console.log("onPause");
    }
  }, {
    key: "onPlay",
    value: function onPlay() {
      console.log("onPlay");
    }
  }, {
    key: "onLoadedData",
    value: function onLoadedData() {
      console.log("data loaded");
      this.startThreadForAutoPlayPause();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.type === this.RENDER_TYPE.VIDEO) {
        return _react2.default.createElement(
          "video",
          { width: "100%", controls: true, loop: this.props.loop, poster: this.props.defaultImage,
            muted: this.props.muted,
            onAbort: this.onAbort.bind(this),
            onError: this.onError.bind(this),

            onPause: this.onPause.bind(this),
            onPlay: this.onPlay.bind(this),
            onLoadedData: this.onLoadedData.bind(this),
            ref: function ref(videoPlayer) {
              return _this3.videoPlayer = videoPlayer;
            } },
          _react2.default.createElement("source", { src: this.props.video, type: "video/mp4" }),
          this.renderImage()
        );
      } else if (this.props.posterImage) {
        return this.renderImage();
      } else {
        return null;
      }
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      return _react2.default.createElement("img", { src: this.props.posterImage, alt: this.props.posterImage, style: _styles.styles.image });
    }
  }]);

  return AutoPlayVideo;
}(_react.Component);

exports.default = AutoPlayVideo;

//# sourceMappingURL=AutoPlayVideo.js.map