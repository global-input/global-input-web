// DisplayHeader.jsx

import React from 'react';
import { getStyles, deviceDetector } from './styles';

const DisplayHeader = (props) => {
  const renderTitleIcon = () => {
    if (props.titleIcon) {
      return (
        <img src={props.titleIcon} style={styles.titleIcon} alt="Title Icon" />
      );
    } else {
      return null;
    }
  };

  const layoutChanged = () => {
    // In React.js, layout changes are handled differently.
    // If you need to force an update, you can use state or refs.
  };

  const styles = getStyles();
  let headerStyle = styles.header;

  if (deviceDetector.isLandscapeMode()) {
    headerStyle = styles.headerLandscape;
  }

  if (props.title) {
    return (
      <div style={headerStyle}>
        <div style={styles.centerHeader}>
          {renderTitleIcon()}
          <span style={styles.titleText}>{props.title}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div style={headerStyle}>
        {props.children}
      </div>
    );
  }
};

export default DisplayHeader;