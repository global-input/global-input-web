import React, { useState, useLayoutEffect ,useRef} from 'react';
import { styles } from './styles';

import InputWithLabel from './input-with-label';
import TextButton from './text-button';
import SelectableInput from './selectable-input';
import ClipboardCopyButton from './clipboard-copy-button';
import InputWithCopy from './input-with-copy';
import {SelectionContainer, RadioButton,CheckboxButton} from './selectable';

export {InputWithLabel,TextButton,SelectableInput,ClipboardCopyButton,InputWithCopy};
export {SelectionContainer, RadioButton,CheckboxButton};
export function useWindowSize() {
     const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
     useLayoutEffect(() => {
          function updateSize() {
               setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
     }, []);
     return size;
};


export const QRCodeContainer = ({ children }) => {
     return (
          <div style={styles.barcodeContainer}>
               <div style={styles.barcode}>
                    {children}
               </div>
          </div>
     );
}



export const PageContainer = ({ children }) => {
     return (
          <div style={styles.pageContainer}>
               <div style={styles.pageContent}>
                    <div style={styles.bodyContent}>{children}
                    
                    </div>
                    <AppInfo/>     
               </div>
               
          </div>


     );
}
export const VideoContainer = ({ children }) => {
     return (<div style={styles.videoContainer}>{children}</div>);
}


export const ErrorMessage= ({errorMessage})=>{
     if(errorMessage){
       return (<div style={styles.errorMessage.get()}>{errorMessage}</div>);
     }
     else {
       return null;
     }  
 }

 




export const Title = ({ children }) => {
     return (<div style={styles.title}>{children}</div>);
}
export const P = ({ children}) => (<div  style={styles.paragraph.get()}>{children}</div>);

export const A = ({ href, children }) => (<a href={href} style={styles.link} target="__blank">{children}</a>);

export const Code=({children})=>(
     <div style={styles.codeContainer}>
         <pre style={styles.code}>{children}</pre>
     </div>
);

export const Concept=({children})=>(<span style={styles.concept}>{children}</span>);


export const TextAreaBox = ({value, id, onChange})=>(
     <textarea  id={id} style={styles.form.textArea.get()}
     onChange={onChange} value={value}/>            
);

export const TextInputBox=({id,type,onChange,value,label})=>{
     return(           
              <div style={styles.form.row}>             
                 <label htmlFor={id} style={styles.form.label}>{label}</label>
                <input  id={id} style={styles.form.input}
                
               type={type}            
               
               onChange={onChange} value={value}/>
               
             </div>
         
            
     );
};


export const DisplayInputCopyField = ({field,hideValue,onChange,onToggleSelection})=>{
     var fieldType="text";
     if(field.nLines && field.nLines>1){
         fieldType="textarea";
     }          
     if(hideValue){
       fieldType="password";
     }
     let value=field.value;
     if(!value){
          value='';
     }
     return(       
         <InputWithCopy label={field.label} id={field.id} type={fieldType}
            value={value}  onSelected={onToggleSelection} secret={true}
            onChange={onChange}/>    
       );
};

export const DisplayCanvas=({onCanvas})=>{
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
     var canvasWidth = 16 * canvasHeight / 9;
     if (canvasWidth > w) {
          canvasWidth = w - 50;
          canvasHeight = 9 * canvasWidth / 16;
     }
     return(
               <canvas  width={canvasWidth} height={canvasHeight} ref={setCanvas} style={styles.canvas}/>
     );
};


export const ContentContainer=({children,row})=>{
     let st=styles.contentContainer.left;  
     if(row==='center'){
         st=styles.contentContainer.center;  
     }
     return(<div style={st.get()}>{children}</div>);
}

export const AppInfo=()=>(
     <P>This example application (with <A href="https://github.com/global-input/mobile-encryption">its source code</A>) demonstrates how you can use the <a href="https://github.com/global-input/global-input-react">extension library</a> to implement a <a href="https://globalinput.co.uk/global-input-app/mobile-content-encryption">Mobile Encryption</a> mechanism to secure user information in a way that allows users to have complete control over their own data.            
     </P>
 );


