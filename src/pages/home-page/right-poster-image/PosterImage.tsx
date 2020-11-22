import React from 'react';
import rightPoster from './images/right-poster.png';




const RightPosterImage = () => {
    return (<img src={rightPoster} style={styles.rightImage} alt='Multiple Device Environment' />);
};


export default RightPosterImage;
const styles = {
    rightImage: {
        position: "absolute",
        top: "2vw",
        right: "5vw"
    },
};
