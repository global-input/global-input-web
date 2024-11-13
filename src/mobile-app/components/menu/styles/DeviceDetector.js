export default class DeviceDetector {
  DEVICE_TYPE = {
    OTHERS: 1,
    ANDROID: 2,
    IPAD: 3,
    IPHONE: 4,
    IPHONEX: 5,
  };

  constructor() {
    this.X_WIDTH = 375;
    this.X_HEIGHT = 812;
    this.device = null;
  }

  matchScreenSize(w, h) {
    return (
      (this.device.height === h && this.device.width === w) ||
      (this.device.height === w && this.device.width === h)
    );
  }

  getDevice() {
    if (this.device) {
      return this.device;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    this.device = { width, height };

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      this.device.type = this.DEVICE_TYPE.ANDROID;
      return this.device;
    }

    if (/iPad|Macintosh/i.test(userAgent) && 'ontouchend' in document) {
      this.device.type = this.DEVICE_TYPE.IPAD;
      return this.device;
    }

    if (/iPhone/i.test(userAgent)) {
      if (
        this.matchScreenSize(375, 812) ||
        this.matchScreenSize(414, 896) ||
        this.matchScreenSize(390, 844)
      ) {
        this.device.type = this.DEVICE_TYPE.IPHONEX;
      } else {
        this.device.type = this.DEVICE_TYPE.IPHONE;
      }
      return this.device;
    }

    // For other devices
    this.device.type = this.DEVICE_TYPE.OTHERS;
    return this.device;
  }

  isIphone() {
    return this.getDevice().type === this.DEVICE_TYPE.IPHONE;
  }

  isIphoneX() {
    return this.getDevice().type === this.DEVICE_TYPE.IPHONEX;
  }

  isIPad() {
    return this.getDevice().type === this.DEVICE_TYPE.IPAD;
  }

  isAndroid() {
    return this.getDevice().type === this.DEVICE_TYPE.ANDROID;
  }

  isLandscapeMode() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return width > height;
  }

  isLandScapeScreenWidthSmall() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return width > height && width < 600;
  }

  getStaticDimension() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width > height) {
      return {
        width: height,
        height: width,
      };
    } else {
      return {
        width: width,
        height: height,
      };
    }
  }

  calculateMarkerSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let ws = width;
    if (height < ws) {
      ws = height;
    }
    return Math.floor((ws * 250) / 320);
  }
}