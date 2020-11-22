import React from 'react';
import rightPoster400 from './images/right-poster-400.png';




const RightPosterImage400 = () => {
    return (<img src={rightPoster400} style={styles.rightImage} alt='Multiple Device Environment' />);
};


export default RightPosterImage400;
const styles = {
    rightImage: {
        position: "absolute",
        top: "2vw",
        right: "5vw"
    },
};
