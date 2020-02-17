import React,{useRef, useEffect,useReducer} from "react";



import PageContainer from './generic-example-container';



import * as actions from './actions';
import * as videoControl from './videoControl';
import {BarCodeContainer, Title} from './app-layout'; 







export default () => {
  const videoPlayer=useRef(null);

  
  const [state, dispatch]=useReducer(actions.reducer, actions.initialData);
  const {connectionMessage} =actions.useMobile({state,dispatch,videoPlayer});
  const {video}=state;
  
  
  useEffect(()=>{
    videoControl.setPlayVideoSource(videoPlayer.current,video);
  },[video]);


  const onPlay=()=>{        
    actions.events.onPlayPause({state,isPlaying:true});        
  }
  const onPause=()=>{        
    actions.events.onPlayPause({state,isPlaying:false});        
  };
  const onTimeUpdate=()=>{
    const {currentTime, duration}=videoControl.getVideoData(videoPlayer.current);                     
    actions.events.setCurrentTime({state,currentTime,duration});      
  };
  const onAbort=()=>{
    actions.events.onAbort({state,videoPlayer});        
  };
  const onCanPlay=()=>{
    actions.events.onCanPlay({state,videoPlayer});        
  }
  const onCanPlayThrough=()=>{
    actions.events.onCanPlayThrough({state,videoPlayer});        
  };
  const onDurationChange=()=>{
    actions.events.onDurationChange({state,videoPlayer});        
  };
  const onEncrypted=()=>{
    actions.events.onEncrypted({state,videoPlayer});        
  };
  const onEnded=()=>{
    actions.events.onEnded({state,videoPlayer});        
  };
  const onError=()=>{
    actions.events.onError({state,videoPlayer});        
  }

  

  
  
  const {videoWidth,videoHeight}=videoControl.calculateWatchWindowSize();  
  console.log("---video---:"+JSON.stringify(video));
  return (
      <PageContainer>
            <Title>{video.title}</Title>
            <video width={videoWidth} height={videoHeight}
                    id="videoplayer" autoPlay={false}
                    muted={true}
                    ref={videoPlayer}
                
                onAbort={onAbort}
                onCanPlay={onCanPlay}
                onCanPlayThrough={onCanPlayThrough}
                onDurationChange={onDurationChange}
                onEncrypted={onEncrypted}
                onEnded={onEnded}
                onError={onError}
                // onLoadedData={onLoadedData.}
                // onLoadedMetadata={onLoadedMetadata}
                // onLoadStart={onLoadStart}
                onPause={onPause}
                onPlay={onPlay}
                // onPlaying={onPlaying}
                // onProgress={onProgress}
                // onRateChange={onRateChange}
                // onSeeked={onSeeked}
                // onSeeking={onSeeking}
                // onStalled={onStalled}
                // onSuspend={onSuspend}
                onTimeUpdate={onTimeUpdate}
                // onVolumeChange={onVolumeChange}
                // onWaiting={onWaiting}
                controls>
                <source src={video.mp4} type="video/mp4"/>
            </video>            
                
            {connectionMessage}                                    
                
      </PageContainer>);

    
};





