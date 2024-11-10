// styles.js
import { CSSProperties } from 'react';
import DeviceDetector from './DeviceDetector';
const deviceDetector = new DeviceDetector();

const getStyles = (): { [key: string]: CSSProperties } => {
  const stylesData: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,1)',
      width: '100%',
      minHeight: '100vh', // Adjusted for web
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
      borderBottomWidth: '1px',
      borderColor: 'rgba(80,80,80,0.5)',
      borderStyle: 'solid',
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
      flexWrap: 'nowrap',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
    },
    titleIcon: {
      marginRight: '5px',
    },
    contentContainer: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: '100%',
      paddingBottom: '70px',
    },
    tab: {
      margin: 0,
      bottom: 0,
      left: 0,
      position: 'fixed', // Changed to 'fixed' for web
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgba(72,128,237,1)',
      width: '100%',
      borderColor: '#333333',
      borderStyle: 'solid',
      borderTopWidth: '1px',
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
      borderBottomWidth: '1px',
      borderColor: 'rgba(80,80,80,0.5)',
      borderStyle: 'solid',
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
      position: 'fixed', // Changed to 'fixed' for web
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
      position: 'fixed', // Changed to 'fixed' for web
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
    menuTextSelected: {
      color: '#FFFFFF',
      fontSize: '10px',
      fontWeight: 'bold',
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
      borderColor: '#FFFFFF',
      borderStyle: 'solid',
      borderBottomWidth: '1px',
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

  // Adjust styles based on device
  if (deviceDetector.isIphoneX()) {
    stylesData.header.paddingTop = '40px';
    stylesData.tabOnTop.paddingTop = '40px';
    stylesData.tab.paddingBottom = '17px';
  } else if (deviceDetector.isIPad() || deviceDetector.isIphone()) {
    stylesData.header.paddingTop = '20px';
    stylesData.tabOnTop.paddingTop = '20px';
  }

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
    paddingRight: '30px',
    paddingLeft: '30px',
  };

  const staticDimension = deviceDetector.getStaticDimension();
  stylesData.contentContainer.width = `${staticDimension.width}px`;

  stylesData.contentContainerLandscape = {
    ...stylesData.contentContainer,
    paddingRight: '30px',
    paddingLeft: '35px',
    width: `${staticDimension.height}px`,
  };

  stylesData.floatingIconLandscape = {
    ...stylesData.floatingIcon,
    right: '50px',
  };

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

  return stylesData;
};

export { getStyles, deviceDetector };