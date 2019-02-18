"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _globalInputConnect = require("../../components/global-input-connect");

var _globalInputConnect2 = _interopRequireDefault(_globalInputConnect);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var textContent = {
    title: "Media Control App Example"
};

var MediaPlayerControlExample = function (_React$Component) {
    _inherits(MediaPlayerControlExample, _React$Component);

    function MediaPlayerControlExample(props) {
        _classCallCheck(this, MediaPlayerControlExample);

        var _this = _possibleConstructorReturn(this, (MediaPlayerControlExample.__proto__ || Object.getPrototypeOf(MediaPlayerControlExample)).call(this, props));

        _this.state = { currentTime: null };
        _this.initMobileData(props);
        return _this;
    }

    _createClass(MediaPlayerControlExample, [{
        key: "setCurrentTime",
        value: function setCurrentTime(currentTime) {
            this.setState({ currentTime: currentTime });
        }
    }, {
        key: "initMobileData",
        value: function initMobileData(props) {
            var _this2 = this;

            this.mobile = {
                globalInputConnect: null,
                sendMessage: function sendMessage(message, fieldid) {
                    if (_this2.mobile.globalInputConnect) {

                        _this2.mobile.globalInputConnect.sendInputMessage(message, null, fieldid);
                    } else {}
                },
                config: {
                    url: props.url,
                    apikey: props.apikey,
                    securityGroup: props.securityGroup,
                    initData: {
                        action: "input",
                        dataType: "control",
                        form: {
                            title: "Video Player Control",
                            fields: []
                        }
                    }
                },
                addField: function addField(field) {
                    return _this2.mobile.config.initData.form.fields.push(field);
                }
            };
            var videoTitleField = {
                id: "videoTitle",
                type: "info",
                value: {
                    type: "text",
                    content: "Big Buck Bunny",
                    style: {
                        fontSize: 18,
                        marginTop: 20
                    }
                },
                viewId: "row1"
            };
            this.mobile.addField(videoTitleField);

            var buildPlayerStatusValue = function buildPlayerStatusValue(title, message) {
                var statusValue = {
                    type: "view",
                    style: {
                        borderColor: "#rgba(72,128,237,0.5)",
                        borderWidth: 1,
                        marginTop: 5,
                        minWidth: 80,
                        minHeight: 80
                    },
                    content: [{
                        type: "text",
                        content: "",
                        style: {
                            fontSize: 14
                        }
                    }, {
                        type: "text",
                        content: "",
                        style: {
                            fontSize: 14
                        }
                    }]

                };
                if (title) {
                    statusValue.content[0].content = title;
                    statusValue.content[1].content = message;
                }
                return statusValue;
            };
            var playerStatusField = {
                id: "playerStatus",
                type: "info",
                value: buildPlayerStatusValue(),
                viewId: "row2"
            };
            this.mobile.addField(playerStatusField);

            this.mobile.setPlayerStatus = function (title, message) {
                var playStatusValue = buildPlayerStatusValue(title, message);
                _this2.mobile.sendMessage(playStatusValue, playerStatusField.id);
            };

            var currentTimeField = {
                id: "currentTime",
                type: "range",
                value: 0,
                minimumValue: 0,
                maximumValue: 100,
                step: 1,
                viewId: "row3",
                operations: { onInput: function onInput(value) {
                        return _this2.onSliderChanged(value);
                    } }
            };
            this.mobile.addField(currentTimeField);

            this.mobile.setCurrentTime = function (currentTime, duration) {

                if (!duration) {

                    return;
                }
                var data = {
                    sliderValue: {
                        value: Math.floor(currentTime * 100 / duration),
                        labels: {
                            value: _this2.buildTimeString(currentTime),
                            minimumValue: _this2.buildTimeString(0),
                            maximumValue: _this2.buildTimeString(duration)
                        }
                    },
                    timestamp: new Date().getTime()
                };

                if (!_this2.cache || data.timestamp - _this2.cache.timestamp > 2000 && Math.abs(data.sliderValue.value - _this2.cache.sliderValue.value) >= 5) {
                    _this2.cache = data;
                    _this2.mobile.sendMessage(data.sliderValue, currentTimeField.id);
                }
            };

            var rwButtonField = {
                id: "rwButton",
                type: "button",
                label: "RW",
                icon: "rw",
                viewId: "row4",
                operations: { onInput: function onInput(value) {
                        return _this2.rewind();
                    } }
            };
            this.mobile.addField(rwButtonField);

            var playPauseButtonField = {
                id: "playPauseButton",
                type: "button",
                value: 0,
                label: "Play",
                icon: "play",
                options: [{ value: 0, label: "Play", icon: "play" }, { value: 1, label: "Pause", icon: "pause" }],
                viewId: "row4",
                operations: { onInput: function onInput(value) {
                        return value ? _this2.pauseVideo() : _this2.playVideo();
                    } }
            };
            this.mobile.addField(playPauseButtonField);
            this.mobile.showPlayButton = function () {
                return _this2.mobile.sendMessage(0, playPauseButtonField.id);
            };
            this.mobile.showPauseButton = function () {
                return _this2.mobile.sendMessage(1, playPauseButtonField.id);
            };

            var ffButtonField = {
                id: "ffButton",
                type: "button",
                label: "FF",
                icon: "ff",
                viewId: "row4",
                operations: { onInput: function onInput(value) {
                        return _this2.fastForward();
                    } }
            };
            this.mobile.addField(ffButtonField);

            var skipToBeginButtonField = {
                id: "skipToBeginButton",
                type: "button",
                label: "Begin",
                icon: "skip-to-begin",
                viewId: "row5",
                operations: { onInput: function onInput(value) {
                        return _this2.skipToBegin();
                    } }
            };
            this.mobile.addField(skipToBeginButtonField);

            var skipToEndButtonField = {
                id: "skipToEndButton",
                type: "button",
                label: "End",
                icon: "skip-to-end",
                viewId: "row5",
                operations: { onInput: function onInput(value) {
                        return _this2.skipToEnd();
                    } }
            };
            this.mobile.addField(skipToEndButtonField);
        }
    }, {
        key: "buildTimeString",
        value: function buildTimeString(timestamp) {
            var mininutes = Math.floor(timestamp / 60) % 60;
            var hours = Math.floor(timestamp / 3600);
            var minutesString = mininutes.toString().length < 2 ? '0' + mininutes : mininutes.toString();

            var seconds = Math.floor(timestamp) % 60;
            var secondsString = seconds.toString().length < 2 ? '0' + seconds : seconds;
            var result = hours > 0 ? hours.toString() + ':' + minutesString + ':' + secondsString : minutesString + ':' + secondsString;
            return result.match(/^([0-9]+:)?[0-9]*:[0-9]*$/) ? result : '00:00';
        }
    }, {
        key: "onSliderChanged",
        value: function onSliderChanged(sliderPosition) {
            console.log("sliderPosition:" + sliderPosition);
            if (this.videoPlayer && this.videoPlayer.duration) {
                this.videoPlayer.currentTime = sliderPosition * this.videoPlayer.duration / 100;
            }
        }
    }, {
        key: "rewind",
        value: function rewind() {
            console.log("rewinding");
            if (this.videoPlayer) {
                this.stopSkipProcess();
                this.videoPlayer.pause();
                this.startSkipProcess();
                this.mobile.setPlayerStatus("Rewinding", "");
            }
        }
    }, {
        key: "startSkipProcess",
        value: function startSkipProcess() {
            var _this3 = this;

            this.stopSkipProcess();
            this.threadForSkip = setInterval(function () {
                var nextPosition = _this3.videoPlayer.currentTime - 0.1;
                if (nextPosition <= 0) {
                    _this3.videoPlayer.currentTime = 0;
                    _this3.stopSkipProcess();
                } else {
                    _this3.videoPlayer.currentTime = nextPosition;
                }
            }, 30);
        }
    }, {
        key: "stopSkipProcess",
        value: function stopSkipProcess() {
            if (this.threadForSkip) {
                clearInterval(this.threadForSkip);
                this.threadForSkip = null;
                this.videoPlayer.playbackRate = 1;
            }
        }
    }, {
        key: "pauseVideo",
        value: function pauseVideo() {
            this.stopSkipProcess();
            if (this.videoPlayer) {
                this.videoPlayer.pause();
                this.videoPlayer.playbackRate = 1;
            }
        }
    }, {
        key: "fastForward",
        value: function fastForward() {
            this.stopSkipProcess();
            this.videoPlayer.playbackRate++;
            if (this.videoPlayer) {
                this.videoPlayer.play();
                this.mobile.setPlayerStatus("Playing", "x " + this.videoPlayer.playbackRate);
            }
        }
    }, {
        key: "skipToBegin",
        value: function skipToBegin() {
            this.stopSkipProcess();
            if (this.videoPlayer) {
                this.videoPlayer.currentTime = 0;
                this.videoPlayer.playbackRate = 1;
                this.mobile.setCurrentTime(0, this.videoPlayer.duration);
            }
        }
    }, {
        key: "skipToEnd",
        value: function skipToEnd() {
            this.stopSkipProcess();
            this.videoPlayer.currentTime = this.videoPlayer.duration;
            this.videoPlayer.playbackRate = 1;
            if (this.videoPlayer) {
                this.mobile.setCurrentTime(this.videoPlayer.duration, this.videoPlayer.duration);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var w = window.innerWidth - 50;
            var h = window.innerHeight - 50;

            var videoHeight = h - 50;
            var videoWidth = 16 * videoHeight / 9;
            if (videoWidth > w) {
                videoWidth = w - 50;
                videoHeight = 9 * videoWidth / 16;
            }

            return _react2.default.createElement(
                "div",
                { style: _styles.styles.container },
                _react2.default.createElement(
                    "div",
                    { style: _styles.styles.title },
                    textContent.title
                ),
                _react2.default.createElement(
                    _globalInputConnect2.default,
                    { mobileConfig: this.mobile.config,
                        ref: function ref(globalInputConnect) {
                            return _this4.mobile.globalInputConnect = globalInputConnect;
                        },
                        connectingMessage: "Connecting....",
                        connectedMessage: "Scan with Global Input App" },
                    _react2.default.createElement(
                        "video",
                        { width: videoWidth, height: videoHeight,
                            id: "videoplayer", autoPlay: false,
                            muted: true,
                            ref: function ref(videoPlayer) {
                                return _this4.videoPlayer = videoPlayer;
                            },
                            onAbort: this.onAbort.bind(this),
                            onCanPlay: this.onCanPlay.bind(this),
                            onCanPlayThrough: this.onCanPlayThrough.bind(this),
                            onDurationChange: this.onDurationChange.bind(this),
                            onEncrypted: this.onEncrypted.bind(this),
                            onEnded: this.onEnded.bind(this),
                            onError: this.onError.bind(this),
                            onLoadedData: this.onLoadedData.bind(this),
                            onLoadedMetadata: this.onLoadedMetadata.bind(this),
                            onLoadStart: this.onLoadStart.bind(this),
                            onPause: this.onPause.bind(this),
                            onPlay: this.onPlay.bind(this),
                            onPlaying: this.onPlaying.bind(this),
                            onProgress: this.onProgress.bind(this),
                            onRateChange: this.onRateChange.bind(this),
                            onSeeked: this.onSeeked.bind(this),
                            onSeeking: this.onSeeking.bind(this),
                            onStalled: this.onStalled.bind(this),
                            onSuspend: this.onSuspend.bind(this),
                            onTimeUpdate: this.onTimeUpdate.bind(this),
                            onVolumeChange: this.onVolumeChange.bind(this),
                            onWaiting: this.onWaiting.bind(this),
                            controls: true },
                        _react2.default.createElement("source", { src: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4", type: "video/mp4" }),
                        _react2.default.createElement("source", { src: "http://clips.vorwaerts-gmbh.de/VfE.webm", type: "video/webm" }),
                        _react2.default.createElement("source", { src: "http://clips.vorwaerts-gmbh.de/VfE.ogv", type: "video/ogg" })
                    ),
                    this.renderCurrentTime()
                )
            );
        }
    }, {
        key: "playVideo",
        value: function playVideo() {
            this.stopSkipProcess();
            if (this.videoPlayer) {
                this.videoPlayer.play();
            }
        }
    }, {
        key: "getVideoPlayRate",
        value: function getVideoPlayRate() {
            return this.videoPlayer.playbackRate;
        }
    }, {
        key: "onAbort",
        value: function onAbort() {
            this.mobile.setPlayerStatus("Aborted", "");
            this.mobile.showPlayButton();
        }
    }, {
        key: "onCanPlay",
        value: function onCanPlay() {}
    }, {
        key: "onCanPlayThrough",
        value: function onCanPlayThrough() {}
    }, {
        key: "onDurationChange",
        value: function onDurationChange() {}
    }, {
        key: "onEncrypted",
        value: function onEncrypted() {}
    }, {
        key: "onEnded",
        value: function onEnded() {
            this.mobile.setPlayerStatus("Completed", "");
            this.mobile.showPlayButton();
        }
    }, {
        key: "processError",
        value: function processError(message, error) {
            var cache = [];
            var errorDetails = JSON.stringify(error, function (key, value) {
                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                    }
                    // Store value in our collection
                    cache.push(value);
                }
                return value;
            });
            cache = null;
            console.warn(message + ":" + errorDetails);
        }
    }, {
        key: "onError",
        value: function onError(error) {
            this.processError("Player Error", error);
            this.mobile.setPlayerStatus("Player Error", "");
            this.mobile.showPlayButton();
        }
    }, {
        key: "onLoadedData",
        value: function onLoadedData() {
            if (this.videoPlayer) {
                this.videoPlayer.scrollIntoView();
            }
        }
    }, {
        key: "onLoadedMetadata",
        value: function onLoadedMetadata() {
            var duration = this.videoPlayer.duration;
            var currentTime = this.videoPlayer.currentTime;
            if (!duration) {
                return;
            }
            this.mobile.setCurrentTime(currentTime, duration);
        }
    }, {
        key: "onLoadStart",
        value: function onLoadStart() {}
    }, {
        key: "onPause",
        value: function onPause() {
            this.mobile.setPlayerStatus("Paused", "");
            this.mobile.showPlayButton();
        }
    }, {
        key: "onPlay",
        value: function onPlay() {}
    }, {
        key: "onPlaying",
        value: function onPlaying() {
            this.mobile.showPauseButton();
        }
    }, {
        key: "onProgress",
        value: function onProgress() {}
    }, {
        key: "onRateChange",
        value: function onRateChange() {}
    }, {
        key: "onSeeked",
        value: function onSeeked() {}
    }, {
        key: "onSeeking",
        value: function onSeeking() {}
    }, {
        key: "onStalled",
        value: function onStalled() {

            this.mobile.setPlayerStatus("Stalled", "");
            this.mobile.showPlayButton();
        }
    }, {
        key: "onSuspend",
        value: function onSuspend() {}
    }, {
        key: "onTimeUpdate",
        value: function onTimeUpdate() {
            var currentTime = this.videoPlayer.currentTime;
            var duration = this.videoPlayer.duration;
            if (!duration) {
                return;
            }
            if (Math.round(currentTime) !== Math.round(this.state.currentTime)) {
                this.setCurrentTime(currentTime);
            }

            this.mobile.setCurrentTime(currentTime, duration);
        }
    }, {
        key: "onVolumeChange",
        value: function onVolumeChange() {}
    }, {
        key: "onWaiting",
        value: function onWaiting() {
            this.mobile.setPlayerStatus("Loading...", "");
        }
    }, {
        key: "renderCurrentTime",
        value: function renderCurrentTime() {

            if (this.videoPlayer) {
                var currentTimeString = this.buildTimeString(this.state.currentTime);
                var durationString = this.buildTimeString(this.videoPlayer.duration);
                return _react2.default.createElement(
                    "div",
                    null,
                    currentTimeString,
                    "/",
                    durationString
                );
            } else {
                return null;
            }
        }
    }]);

    return MediaPlayerControlExample;
}(_react2.default.Component);

exports.default = MediaPlayerControlExample;

//# sourceMappingURL=index.js.map