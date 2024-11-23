import React from 'react';
import {styles} from './styles';
import DisplayBlockText from '../components/display-text/DisplayBlockText';
import ViewWithTabMenu from '../components/menu/ViewWithTabMenu';


import menusConfig from '../configs/menusConfig';

const ClipboardCopyView = ({
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
    navigator.clipboard.writeText(content);
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
        <textarea
          style={styles.textarea}
          multiline={true}
          secureTextEntry={false}
          editable={false}
          value={content}          
          placeholder={placeHolder}
        />
      </div>

      <DisplayBlockText content={content2} />
    </ViewWithTabMenu>
  );
};

export default ClipboardCopyView;