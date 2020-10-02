import React, { useRef, useState, useEffect } from "react";
import { useGlobalInputApp } from 'global-input-react';
import * as selectVideoMobile from './selectVideoMobile';
import * as playVideoMobile from './playVideoMobile';
import * as videoControl from './videoControl';
import { P, QRCodeContainer } from './app-layout';

export default (videoPlayer) => {

        const [videoData, setVideoData] = useState(videoControl.getDefaultVideo());

        const globalInputApp = useGlobalInputApp({ initData: () => selectVideoMobile.initData(videoData.video.title, videoData.video.synopsis) });

        useEffect(() => {
                switch (globalInputApp.field && globalInputApp.field.id) {
                        case 'play':
                                videoControl.playVideo(videoPlayer.current);
                                globalInputApp.setInitData(playVideoMobile.initData(videoData.video.title));
                                break;
                        case 'changeVideo':
                                globalInputApp.setInitData(selectVideoMobile.initData(videoData.video.title, videoData.video.synopsis));
                                break;
                        case 'previousVideo':
                                const v1 = videoControl.getPreviousVideo(videoData)
                                videoControl.setPlayVideoSource(videoPlayer.current, v1.video);
                                selectVideoMobile.setTitleAndSynopsis(globalInputApp, v1.video.title, v1.video.synopsis);
                                setVideoData(v1);
                                break;

                        case 'nextVideo':
                                const v2 = videoControl.getNextVideo(videoData)
                                videoControl.setPlayVideoSource(videoPlayer.current, v2.video);
                                selectVideoMobile.setTitleAndSynopsis(globalInputApp, v2.video.title, v2.video.synopsis);
                                setVideoData(v2);
                                break;
                        case 'currentTime':
                                videoControl.setCurrentTimeWithSlider(videoPlayer.current, globalInputApp.field.value);
                                break;
                        case 'rwButton':
                                playVideoMobile.setPlayerStatus(globalInputApp, '<<', '');
                                playVideoMobile.showPauseButton(globalInputApp);
                                videoControl.rewindVideo(videoPlayer.current, () => {
                                        playVideoMobile.setPlayerStatus(globalInputApp, 'Paused', 'Rewind complete');
                                        playVideoMobile.showPlayButton(globalInputApp);
                                });
                                break;
                        case 'playPauseButton':
                                globalInputApp.field.value ? videoControl.pauseVideo(videoPlayer.current) : videoControl.playVideo(videoPlayer.current);
                                break;
                        case 'ffButton':
                                videoControl.fastForwardVideo(videoPlayer.current);
                                if (videoPlayer.current) {
                                        const { playbackRate } = videoPlayer.current as any;
                                        playVideoMobile.setPlayerStatus(globalInputApp, '>', `x  ${playbackRate}`);
                                        playVideoMobile.showPlayButton(globalInputApp);
                                }
                                break;
                        case 'skipToBeginButton':
                                videoControl.pauseVideo(videoPlayer.current);
                                videoControl.skipToBegin(videoPlayer.current);
                                playVideoMobile.setPlayerStatus(globalInputApp, 'Paused', '');
                                playVideoMobile.showPauseButton(globalInputApp);
                                break;
                        case 'skipToEndButton':
                                videoControl.pauseVideo(videoPlayer.current);
                                videoControl.skipToEnd(videoPlayer.current);
                                playVideoMobile.setPlayerStatus(globalInputApp, 'Paused', '');
                                playVideoMobile.showPauseButton(globalInputApp);
                                break;

                }

        }, [globalInputApp.field])

        const secondScreenControl = {
                setPlayerStatus:(playerStatusTitle,playerStatusMessage)=>{
                        playVideoMobile.setPlayerStatus(globalInputApp, playerStatusTitle, playerStatusMessage);
                },
                showPlayButton:()=>{
                        playVideoMobile.showPlayButton(globalInputApp);
                },              
                showPauseButton:()=>{
                        playVideoMobile.showPauseButton(globalInputApp);        
                },                                                                               
                setSliderValue: (sliderValue) => {
                        playVideoMobile.setSliderValue(globalInputApp, sliderValue);
                }
        };
        const { connectionMessage, WhenWaiting, WhenDisconnected } = globalInputApp;
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


        return { globalInputApp, secondScreenControl, SecondScreenConnection, videoData };

};

