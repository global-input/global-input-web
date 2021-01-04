import React, {useRef} from 'react';
import styled from 'styled-components';
import {SourceLinkElement,AppContainerElement,AppTitleSection,AppTitle,AppBody,AppContent} from '../common-elements';
import {useWindowSize} from './use-window-size';


const SourceLink=styled(SourceLinkElement).attrs({
    href:'https://github.com/global-input/game-control-example',
    rel:'noreferrer noopener',
    target:'_blank'})``;


    export  const AppContainer:React.FC=({children})=>(
        <AppContainerElement>
                <AppTitleSection>
                    <AppTitle>Mobile Control Example</AppTitle>
                    <SourceLink>Source Code</SourceLink>
                </AppTitleSection>
                <AppBody>
                    <AppContent>
                    {children}
                    </AppContent>

                </AppBody>
        </AppContainerElement>
    );

const  Canvas=styled.canvas`
        backgroundColor:"#FFFFFF",
        borderRadius: 25,
        border:1px solid red;
`;


 export    const DisplayCanvas=({onCanvas})=>{

        const canvasHolder=useRef(null);
        const [width,height]=useWindowSize();

       const canvasWidth=width*0.95;
       const canvasHeight=height*0.95;



        const setCanvas=ref=>{
             if(ref && canvasHolder.current!==ref){
                  canvasHolder.current=ref;
                  onCanvas(ref);
             }
         };


        return(
                  <Canvas  ref={setCanvas} width={canvasWidth} height={canvasHeight}/>
        );
    };
    export default DisplayCanvas;
