"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleMatchingScreenSize = styleMatchingScreenSize;
exports.screenMedia = void 0;
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

//# sourceMappingURL=index.js.map