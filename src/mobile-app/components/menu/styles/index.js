// Removed import of StyleSheet and Dimensions from 'react-native'
import  {deviceDetector} from '../../../common-styles';


var stylesData = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  header: {
    backgroundColor: 'rgba(72,128,237,1)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 0,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',    
  },
  centerHeader: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium',
    textAlign: 'center',
    flexWrap: 'nowrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',    
  },
  titleIcon: {
    marginRight: 5,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100%',
    paddingBottom: 70,
  },
  tab: {
    margin: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(72,128,237,1)',
    width: '100%',
    borderColor: '#333333',
    borderStyle: 'solid',
    borderTopWidth: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    zIndex: 100,
  },
  tabOnTop: {
    backgroundColor: 'rgba(72,128,237,1)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 0,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  floatingIcon: {
    margin: 0,
    bottom: 70,
    right: 10,
    position: 'absolute',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  notificationBar: {
    margin: 0,
    height: 70,
    bottom: 40,
    left: 5,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    zIndex: 100,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  menuItem: {
    margin: 0,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconcontainerSelected: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  endSpaceWhenKeyboardHiding: {
    height: 50,
    width: '100%',
  },
  endSpaceWhenKeyboardShowing: {
    height: 100,
    width: '100%',
  },
  textBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  messageWindowContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '90%',
  },
};

// Adjust styles based on device type
if (deviceDetector.isIphoneX()) {
  stylesData.header.paddingTop = 40;
  stylesData.tabOnTop.paddingTop = 40;
  stylesData.tab.paddingBottom = 17;
} else if (deviceDetector.isIPad() || deviceDetector.isIphone()) {
  stylesData.header.paddingTop = 20;
  stylesData.tabOnTop.paddingTop = 20;
}

// Create menuTextSelected style based on menuText
stylesData.menuTextSelected = Object.assign({}, stylesData.menuText, {
  fontWeight: 'bold',
});

// Create landscape variants of styles
stylesData.headerLandscape = Object.assign({}, stylesData.header, {
  paddingRight: 30,
  paddingLeft: 30,
});

stylesData.tabOnTopLandscape = Object.assign({}, stylesData.tabOnTop, {
  paddingRight: 30,
  paddingLeft: 30,
});

stylesData.tabLandscape = Object.assign({}, stylesData.tab, {
  paddingRight: 30,
  paddingLeft: 30,
});

// Set contentContainer width based on device dimensions
stylesData.contentContainer.width = deviceDetector.getStaticDimension().width;

stylesData.contentContainerLandscape = Object.assign(
  {},
  stylesData.contentContainer,
  {
    paddingRight: 30,
    paddingLeft: 35,
    width: deviceDetector.getStaticDimension().height,
  }
);

stylesData.floatingIconLandscape = Object.assign({}, stylesData.floatingIcon, {
  right: 50,
});

// Adjust paddingTop for different devices in landscape mode
if (deviceDetector.isIphoneX()) {
  stylesData.headerLandscape.paddingTop = 5;
  stylesData.tabOnTopLandscape.paddingTop = 5;
} else if (deviceDetector.isIphone()) {
  stylesData.headerLandscape.paddingTop = 5;
  stylesData.tabOnTopLandscape.paddingTop = 5;
} else if (deviceDetector.isIPad()) {
  stylesData.headerLandscape.paddingTop = 20;
  stylesData.tabOnTopLandscape.paddingTop = 20;
}

// Since we don't have StyleSheet in React.js, we can use stylesData directly
var styles = stylesData;
export { styles, deviceDetector, stylesData };