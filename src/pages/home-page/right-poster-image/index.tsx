import React from 'react';
import PosterImage from './PosterImage';
import PosterImage200 from './PosterImage200';
import PosterImage400 from './PosterImage400';

const RightPosterImageResponsive = ({ scWidth }) => {
  console.log("---scWidth:" + scWidth);
  if (scWidth > 1258) {
    return (<PosterImage />);
  }
  else if (scWidth > 800) {
    return (<PosterImage400 />);
  }
  else if (scWidth > 600) {
    return (<PosterImage200 />);
  }
  else {
    return null;
  }

};


export default RightPosterImageResponsive;
