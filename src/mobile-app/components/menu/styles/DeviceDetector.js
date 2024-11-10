// DeviceDetector.js

class DeviceDetector {
  constructor() {
    this.DEVICE_TYPE = {
      OTHERS: 1,
      ANDROID: 2,
      IPAD: 3,
      IPHONE: 4,
      IPHONEX: 5,
    };
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

    const { innerWidth: width, innerHeight: height } = window;
    this.device = { width, height };

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detect Android
    if (/android/i.test(userAgent)) {
      this.device.type = this.DEVICE_TYPE.ANDROID;
      return this.device;
    }

    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iPhone X detection based on screen dimensions
      if (
        this.matchScreenSize(375, 812) ||
        this.matchScreenSize(414, 896) ||
        this.matchScreenSize(390, 844)
      ) {
        this.device.type = this.DEVICE_TYPE.IPHONEX;
        return this.device;
      }

      const aspectRatio = width > height ? width / height : height / width;
      if (aspectRatio > 1.6) {
        this.device.type = this.DEVICE_TYPE.IPHONE;
      } else {
        this.device.type = this.DEVICE_TYPE.IPAD;
      }
      return this.device;
    }

    // Others
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

  isLandscapeMode() {
    return window.innerWidth > window.innerHeight;
  }

  isLandscapeScreenWidthSmall() {
    const { innerWidth: width, innerHeight: height } = window;
    return width > height && width < 600;
  }

  getStaticDimension() {
    const { innerWidth: width, innerHeight: height } = window;
    if (width > height) {
      return {
        width: height,
        height: width,
      };
    } else {
      return {
        width,
        height,
      };
    }
  }

  calculateMarkerSize() {
    const { innerWidth: width, innerHeight: height } = window;
    const ws = Math.min(width, height);
    return Math.floor((ws * 250) / 320);
  }

  isAndroid() {
    return this.getDevice().type === this.DEVICE_TYPE.ANDROID;
  }
}

export default DeviceDetector;