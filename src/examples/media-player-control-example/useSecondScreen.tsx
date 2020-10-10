import React, { useRef, useState, useEffect } from "react";
import { useGlobalInputApp } from 'global-input-react';
import * as config from './config';
import * as videoControl from './videoControl';
import { P, QRCodeContainer } from './app-layout';

export default (videoPlayer) => {

        const [videoData, _setVideoData] = useState(videoControl.getDefaultVideo());
        const {initDataID,connectionMessage, WhenWaiting, WhenDisconnected,setFieldValueById,setOnFieldChanged} = useGlobalInputApp({ initData: config.selector(videoData.video.title, videoData.video.synopsis)});        
        
        const setVideoData = videoData => {
                videoControl.setPlayVideoSource(videoPlayer.current, videoData.video);                                
                setFieldValueById(config.VIDEO_TITLE_ID,videoData.video.title);    
                setFieldValueById(config.VIDEO_SYNOPSIS_ID,videoData.video.synopsis);
                _setVideoData(videoData);
        };        
        const setPlayerStatus = (playerStatusTitle, playerStatusMessage) => {
                setFieldValueById(config.PLAYER_STATUS_FIELD_ID,config.buildPlayerStatusValue(playerStatusTitle,playerStatusMessage));    
        };
        const showPlayButton= ()=>{
                setFieldValueById(config.PLAY_PAUSE_BUTTON_ID,0);        
        };
        const showPauseButton= ()=>{
                setFieldValueById(config.PLAY_PAUSE_BUTTON_ID,1);        
        };
        const setSliderValue= (sliderValue) => {
                setFieldValueById(config.SLIDER_FIELD_ID,sliderValue);        
        };

        setOnFieldChanged(({field,setInitData,initDataID}) => {
                console.log("****initDataID:"+initDataID);
                switch (initDataID===config.VIDEO_SELECTOR_ID && field.id) {
                        case config.VIDEO_PLAYER_ID:
                                videoControl.playVideo(videoPlayer.current);
                                setInitData(config.player(videoData.video.title));
                                break;                        
                        case config.PREVIOUS_VIDEO_ID:
                                setVideoData(videoControl.getPreviousVideo(videoData));
                                break;
                        case config.NEXT_VIDEO_ID:
                                setVideoData(videoControl.getNextVideo(videoData));
                                break;
                }
                
                switch (initDataID===config.VIDEO_PLAYER_ID && field.id) {                        
                        case config.VIDEO_SELECTOR_ID:
                                setInitData(config.selector(videoData.video.title, videoData.video.synopsis));
                                break;                        
                        case config.SLIDER_FIELD_ID:
                                videoControl.setCurrentTimeWithSlider(videoPlayer.current, field.value);
                                break;
                        case config.RW_BUTTON_ID:
                                setPlayerStatus('<<', '');
                                showPauseButton();
                                videoControl.rewindVideo(videoPlayer.current, () => {
                                        setPlayerStatus('Paused', 'Rewind complete');
                                        showPlayButton();
                                });
                                break;
                        case config.PLAY_PAUSE_BUTTON_ID:
                                field.value ? videoControl.pauseVideo(videoPlayer.current) : videoControl.playVideo(videoPlayer.current);                                
                                break;
                        case config.FF_BUTTON_ID:                                
                                if (videoPlayer.current) {
                                        videoControl.fastForwardVideo(videoPlayer.current);
                                        const { playbackRate } = videoPlayer.current as any;
                                        setPlayerStatus('>', `x  ${playbackRate}`);
                                        showPauseButton();
                                }
                                break;
                        case config.SKIP_TO_BEGIN_ID:
                                videoControl.pauseVideo(videoPlayer.current);
                                videoControl.skipToBegin(videoPlayer.current);
                                setPlayerStatus('Paused', '');
                                showPauseButton();
                                break;
                        case config.SKIP_TO_END_ID:
                                videoControl.pauseVideo(videoPlayer.current);
                                videoControl.skipToEnd(videoPlayer.current);
                                setPlayerStatus( 'Paused', '');
                                showPauseButton();
                                break;
                }

        });

        const secondScreenControl = {
                setPlayerStatus,
                showPlayButton,              
                showPauseButton,                                                                              
                setSliderValue
        };
        
        const SecondScreenConnection = () => (
                <>
                        <WhenWaiting>
                                <QRCodeContainer>
                                        {connectionMessage}
                                </QRCodeContainer>
                        </WhenWaiting>
                        <WhenDisconnected>
                                <P>Disconnected, reload the page to try again.</P>

                        </WhenDisconnected>
                </>
        );


        return { secondScreenControl, SecondScreenConnection, videoData };

};

