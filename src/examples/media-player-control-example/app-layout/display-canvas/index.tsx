import React, {useRef} from 'react';
import useWindowSize from '../use-window-size';
const DisplayCanvas=({onCanvas})=>{

    const canvasHolder=useRef(null);
    const [width,height]=useWindowSize();
    const setCanvas=ref=>{
         if(ref && canvasHolder.current!==ref){
              canvasHolder.current=ref;
              onCanvas(ref);

         }
     };
     var w = width - 50;
     var h = height - 50;
    var canvasHeight = h - 50;
    const canvasWidth=w;

    return(
              <canvas  width={canvasWidth} height={canvasHeight} ref={setCanvas} style={styles.canvas}/>
    );
};
export default DisplayCanvas;


const styles={
    canvas:{
        backgroundColor:"#FFFFFF",
        borderRadius: 25,
     }
}