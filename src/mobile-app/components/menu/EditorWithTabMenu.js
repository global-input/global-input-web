import React, { Component } from 'react';
import { styles, deviceDetector } from './styles';
import NotificationBar from './NotificationBar';
import DisplayHeader from './DisplayHeader';

export default class EditorWithTabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardShowing: false,
      windowHeight: window.innerHeight,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.inputs = document.querySelectorAll('input, textarea');
    this.inputs.forEach((input) => {
      input.addEventListener('focus', this.handleFocus);
      input.addEventListener('blur', this.handleBlur);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.inputs.forEach((input) => {
      input.removeEventListener('focus', this.handleFocus);
      input.removeEventListener('blur', this.handleBlur);
    });
  }

  handleResize() {
    if (window.visualViewport) {
      const viewportHeight = window.visualViewport.height;
      if (viewportHeight < this.state.windowHeight) {
        this.setState({ keyboardShowing: true });
      } else {
        this.setState({ keyboardShowing: false });
      }
      this.setState({ windowHeight: viewportHeight });
    } else {
      // Fallback for browsers that don't support VisualViewport
      const currentHeight = window.innerHeight;
      if (currentHeight < this.state.windowHeight) {
        this.setState({ keyboardShowing: true });
      } else {
        this.setState({ keyboardShowing: false });
      }
      this.setState({ windowHeight: currentHeight });
    }
  }

  handleFocus = () => {
    this.setState({ keyboardShowing: true });
  };

  handleBlur = () => {
    this.setState({ keyboardShowing: false });
  };

  renderMenuItem(menuItem, index) {
    var key = index + '_' + menuItem.label;
    return (
      <MenuItem
        menu={menuItem.menu}
        onPress={menuItem.onPress}
        selected={this.props.selected}
        key={key}
      />
    );
  }

  renderTitleIcon() {
    if (this.props.titleIcon) {
      return <img src={this.props.titleIcon} style={styles.titleIcon} alt="" />;
    } else {
      return null;
    }
  }

  renderNotificationBar() {
    if (this.props.notificationMessage) {
      return <NotificationBar message={this.props.notificationMessage} />;
    } else {
      return null;
    }
  }

  renderHeader() {
    if (this.state.keyboardShowing) {
      return null;
    } else {
      return (
        <DisplayHeader
          title={this.props.title}
          titleIcon={this.props.titleIcon}
        />
      );
    }
  }

  renderTab() {
    if (this.state.keyboardShowing) {
      var tabOnTopStyle = styles.tabOnTop;
      if (deviceDetector.isLandscapeMode()) {
        tabOnTopStyle = styles.tabOnTopLandscape;
      }
      

      return (
        <div style={tabOnTopStyle}>
          <div style={styles.scrollContainer}>
            {this.props.menuItems.map(this.renderMenuItem.bind(this))}
          </div>
        </div>
      );
    } else {      
      var tab = styles.tab;
      if (deviceDetector.isLandscapeMode()) {
        tab = styles.tabLandscape;
      }
      return (
        <div style={tab}>
          <div style={styles.scrollContainer}>
            {this.props.menuItems.map(this.renderMenuItem.bind(this))}
          </div>
        </div>
      );
    }
  }

  renderEnd() {
    if (this.state.keyboardShowing) {
      return <div style={styles.endSpaceWhenKeyboardShowing} />;
    } else {
      return <div style={styles.endSpaceWhenKeyboardHiding} />;
    }
  }

  render() {
    
    var contentContainerStyle = styles.contentContainer;
    if (deviceDetector.isLandscapeMode()) {
      
      contentContainerStyle = styles.contentContainerLandscape;
    }
    let containerStyle=styles.container;
    if(this.state.keyboardShowing){
      containerStyle=styles.containerWhenKeyboardShowing;

    }
    
    return (
      <div style={containerStyle}>
        {this.renderHeader()}
        {this.renderTab()}
        {this.renderNotificationBar()}
        
          
          <div style={contentContainerStyle}>{this.props.children}</div>
        
        {this.renderEnd()}
      </div>
    );
  }
}

class MenuItem extends Component {
  renderLabel() {
    if (this.props.menu && this.props.menu.label) {
      var menuText = styles.menuText;
      if (this.props.selected === this.props.menu) {
        menuText = styles.menuTextSelected;
      }
      return <span style={menuText}>{this.props.menu.label}</span>;
    } else {
      return null;
    }
  }

  renderImage() {
    if (this.props.menu && this.props.menu.image) {
      var image = this.props.menu.image;
      if (
        this.props.menu.imageSelected &&
        this.props.selected === this.props.menu
      ) {
        image = this.props.menu.imageSelected;
      }
      return <img src={image} alt="" />;
    } else {
      return null;
    }
  }

  render() {
    var iconContainerStyle = styles.iconcontainer;
    if (this.props.selected === this.props.menu) {
      iconContainerStyle = styles.iconcontainerSelected;
    }
    return (
      <div onClick={this.props.onPress} style={styles.menuItem}>        
        <div style={iconContainerStyle}>
          {this.renderImage()}
          {this.renderLabel()}
        </div>
      </div>
    );
  }
}