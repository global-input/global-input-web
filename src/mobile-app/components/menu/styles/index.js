// Import necessary modules
import { deviceDetector } from '../../../common-styles';

// Adjusted styles for React.js
const stylesData = {
  container: {
    display: 'flex',
    flex: 1, // May need adjustment based on your layout
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  containerWhenKeyboardShowing: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    paddingTop: '70px',
    border: '1px solid red',
  },
  header: {
    backgroundColor: 'rgba(72,128,237,1)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 0,
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingBottom: '5px',
    color:"white"
    
  },
  centerHeader: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium',
    textAlign: 'center',
    whiteSpace: 'nowrap', // Adjusted from flexWrap
    color: '#FFFFFF',
  },
  titleIcon: {
    marginRight: '5px',
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh', // Adjusted to use viewport height
    paddingBottom: '70px',
    paddingTop:"20px",
    paddingLeft:"20px",
    paddingRight:"20px",
  },
  tab: {
    margin: 0,
    bottom: 0,
    left: 0,
    position: 'fixed', // Changed from absolute to fixed
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(72,128,237,1)',
    width: '100%',
    
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '10px',
    paddingBottom: '5px',
    zIndex: 100,
  },
  tabOnTop: {
    backgroundColor: 'rgba(72,128,237,1)',
    width: '100%',
    display: 'flex',
    position: 'fixed', // Added for fixed position at top
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 0,
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingBottom: '5px',
    borderBottom: '1px solid rgba(80,80,80,0.5)',
    zIndex: 100,
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
    bottom: '70px',
    right: '10px',
    position: 'fixed',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  notificationBar: {
    margin: 0,
    height: '70px',
    bottom: '40px',
    left: '5px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    zIndex: 100,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: '10px',
  },
  menuItem: {
    margin: 0,
    paddingLeft: '10px',
    paddingRight: '10px',
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
    borderBottom: '1px solid #FFFFFF',
  },
  endSpaceWhenKeyboardHiding: {
    height: '50px',
    width: '100%',
  },
  endSpaceWhenKeyboardShowing: {
    height: '100px',
    width: '100%',
  },
  textBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: '10px',
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
  stylesData.header.paddingTop = '40px';
  stylesData.tabOnTop.paddingTop = '40px';
  stylesData.tab.paddingBottom = '17px';
} else if (deviceDetector.isIPad() || deviceDetector.isIphone()) {
  stylesData.header.paddingTop = '20px';
  stylesData.tabOnTop.paddingTop = '20px';
}

// Create menuTextSelected style based on menuText
stylesData.menuTextSelected = {
  ...stylesData.menuText,
  fontWeight: 'bold',
};

// Create landscape variants of styles
stylesData.headerLandscape = {
  ...stylesData.header,
  paddingRight: '30px',
  paddingLeft: '30px',
};

stylesData.tabOnTopLandscape = {
  ...stylesData.tabOnTop,
  paddingRight: '30px',
  paddingLeft: '30px',
};

stylesData.tabLandscape = {
  ...stylesData.tab,
  
};

// Set contentContainer width based on device dimensions
// stylesData.contentContainer.width = deviceDetector.getStaticDimension().width + 'px';

stylesData.contentContainerLandscape = {
  ...stylesData.contentContainer,
  paddingRight: '30px',
  paddingLeft: '35px',
  width: deviceDetector.getStaticDimension().height + 'px',
};

stylesData.floatingIconLandscape = {
  ...stylesData.floatingIcon,
  right: '50px',
};

// Adjust paddingTop for different devices in landscape mode
if (deviceDetector.isIphoneX()) {
  stylesData.headerLandscape.paddingTop = '5px';
  stylesData.tabOnTopLandscape.paddingTop = '5px';
} else if (deviceDetector.isIphone()) {
  stylesData.headerLandscape.paddingTop = '5px';
  stylesData.tabOnTopLandscape.paddingTop = '5px';
} else if (deviceDetector.isIPad()) {
  stylesData.headerLandscape.paddingTop = '20px';
  stylesData.tabOnTopLandscape.paddingTop = '20px';
}

// Export the styles
export { stylesData as styles, deviceDetector };