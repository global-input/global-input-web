import React from 'react';

import  Clipboard from '@react-native-clipboard/clipboard';
import {styles} from './styles';

import DisplayBlockText from '../components/display-text/DisplayBlockText';
import ViewWithTabMenu from '../components/menu/ViewWithTabMenu';

import menusConfig from '../configs/menusConfig';

const  ClipboardCopyView = ({
  content,
  onNextStep,
  onBack,
  title,
  selected,
  content1,
  content2,
  placeHolder
}) => {
  const onClipboardCopy = () => {    
    Clipboard.setString(content);
    onNextStep();
  };
  var menuItems = [
    {menu: menusConfig.back.menu, onPress: onBack},
    {menu: menusConfig.clipboardCopy.menu, onPress: onClipboardCopy}
  ];  
  return (
    <ViewWithTabMenu menuItems={menuItems} selected={selected} title={title}>
      <DisplayBlockText content={content1} />
      <div style={styles.itemRecord}>
        <input
          style={styles.textarea}
          multiline={true}
          secureTextEntry={false}
          editable={false}
          value={content}
          numberOfLines={6}
          placeholder={placeHolder}
        />
      </div>

      <DisplayBlockText content={content2} />
    </ViewWithTabMenu>
  );
};

export default ClipboardCopyView;