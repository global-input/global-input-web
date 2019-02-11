"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = {
  mql: window.matchMedia("(min-width: 800px)"),
  isMobile: function isMobile() {
    return !this.mql.matches;
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  qrCodeContainer: {
    padding: 5,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  label: {
    marginTop: 10,
    fontSize: 22,
    color: "#4880ED",
    fontWeight: 300

  }
};

exports.styles = styles;

//# sourceMappingURL=styles.js.map