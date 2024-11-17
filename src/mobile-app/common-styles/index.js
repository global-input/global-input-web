



const commonStyles ={
  container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent:"flex-start",
          alignItems:"center",
          backgroundColor: "rgba(72,128,237,1)"
  },
  overlayContainer:{
    flex: 1,
    flexDirection: 'column',
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100%",
    position:"absolute",
    top:88,

  },
  header:{
          backgroundColor: "rgba(72,128,237,1)",
          width:"100%",
          minHeight: 50,
          display: "flex",
          flexDirection: 'row',
          justifyContent:"space-between",
          alignItems:"center",
          margin:0,          
          paddingLeft:5,
          paddingRight:5,
          paddingBottom:5,
          width:"100%",
          borderBottomWidth:1,
          borderColor:"rgba(80,80,80,0.5)"
  },
  headerItem:{
        display: "flex",
        flexDirection: 'row',
        justifyContent:"flex-start",
        alignItems:"center",
  },
  narrrowHeader:{
          backgroundColor: 'rgba(255,255,255,0.5)',
          minHeight: 50,
          display: "flex",
          flexDirection: 'row',
          justifyContent:"center",
          alignItems:"center",
          margin:0,
          paddingTop:5,
          padding:5,
          width:"100%"
  },
  leftHeader:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start"
  },
  fourLeftHeader:{
    flex:4,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start"
  },
  rightHeader:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  centerHeader:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  },



  titleText:{
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Futura-Medium',
        textAlign:"center",
        flexWrap:"nowrap",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        color:"#FFFFFF"

  },
  contentContainer:{
      width:"100%",
      height:"91%",
      backgroundColor:'rgba(255, 255, 255, 1)',
      padding:0,
      display:"flex",
      flexDirection: 'column',
      justifyContent:"flex-start",

  },
  button:{
      padding:5,
      borderRadius: 10,
      borderWidth:1,
      borderColor:"rgba(72,128,237,1)",
      backgroundColor:"white",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginLeft:30,
      marginRight:30,
      marginTop:10,
      marginBottom:10,
  },

  buttonText:{
    color:"rgba(72,128,237,1)",
    margin:5,
    fontSize:20,
    fontFamily:"Futura-Medium",
  },
  formEditField:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginRight:20,
    marginBottom:10,
    marginTop:10,
  },

  endSpace:{
      height: 130,
      width:"100%",

  }
};



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
const deviceDetector = new DeviceDetector();


export {commonStyles,deviceDetector};
