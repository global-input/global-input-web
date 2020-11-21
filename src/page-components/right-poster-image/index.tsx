import React from 'react';
import { styles } from "./styles";
import { withResponsiveComponent } from '../../components/screen-media';

const RightPosterImage = props => {
  var postImage = props.image;
  if (props.screenMedia) {
    if (!props.screenMedia.biggerThan(800)) {
      return null;
    }
    if (props.image200 && (!props.screenMedia.biggerThan(680))) {
      postImage = props.image200;
    }
    else if (props.image400 && (!props.screenMedia.biggerThan(1258))) {
      postImage = props.image400;
    }
  }
  return (<img src={postImage} style={styles.rightImage.get()} alt='Multiple Device Environment' />);
};
const ResponsiveRightPosterImage = withResponsiveComponent(RightPosterImage);


export default ResponsiveRightPosterImage;
