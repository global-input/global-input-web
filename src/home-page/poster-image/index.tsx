import styled from 'styled-components';
import posterImage552 from './images/right-poster-552-505.png';
import posterImage200 from './images/right-poster-200-183.png';
import posterImage350 from './images/right-poster-350-320.png';

export const PosterImage=styled.div`
      position: absolute;
      top: 30vh;
      left: 50vw;
      overflow: hide;
      display:none;

      @media only screen and (min-width:900px){
        display:block;
        background-image:url(${posterImage350});
        background-repeat: no-repeat;
        width:350px;
        height:320px;

      }
      @media only screen and (min-width:1258px){
          display:block;
          background-image:url(${posterImage552});
          background-repeat: no-repeat;
          width:552px;
          height:505px;
      }


`;
