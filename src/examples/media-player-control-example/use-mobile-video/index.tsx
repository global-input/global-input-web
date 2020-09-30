import React, { useRef, useState,useEffect} from "react";
import { useGlobalInputApp } from 'global-input-react';
import selectVideoInitData from './selectVideoInitData';
export default ({videoData,onPreviousVideo,onNextVideo}) => {
  const [initData,setInitData]=useState<any>(null);

  const onFieldChanged=({field})=>{
    switch(field.id){
        case 'previousVideo':   
                onPreviousVideo();          
                break;
        case 'nextVideo':
               onNextVideo();
               break;
        case 'play':               
    }
  }

  const globalInputApp = useGlobalInputApp({initData,onFieldChanged}, [initData]);

  const switchToSelectVideoControl=()=>{          
        const initData=selectVideoInitData(videoData.video);   
        setInitData(initData); 
  };
  useEffect(()=>{
    switchToSelectVideoControl();      
   },[]);


  return {initData,setInitData,globalInputApp};
};




