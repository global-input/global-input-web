import React from 'react';
import rightPoster200 from './images/right-poster-200.png';
const RightPosterImage200 = () => {
    return (<img src={rightPoster200} style={styles.rightImage} alt='Multiple Device Environment' />);
};
export default RightPosterImage200;
const styles = {
    rightImage: {
        position: "absolute",
        top: "2vw",
        right: "5vw"
    } as React.CSSProperties
};
