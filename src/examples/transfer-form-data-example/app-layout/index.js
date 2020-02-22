import React, { useState, useLayoutEffect } from 'react';
import { styles } from './styles';

import InputWithLabel from './input-with-label';
import TextButton from './text-button';
import SelectableInput from './selectable-input';
import ClipboardCopyButton from './clipboard-copy-button';
import InputWithCopy from './input-with-copy';

export {InputWithLabel,TextButton,SelectableInput,ClipboardCopyButton,InputWithCopy};
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
                    <div style={styles.bodyContent}>{children}</div>

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
export const P = ({ children,id}) => (<div id={id} style={styles.paragraph.get()}>{children}</div>);

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

export const TextInputBox=({id,type,readOnly,onChange,value,label})=>{
     return(           
              <div style={styles.form.row}>             
                 <label htmlFor={id} style={styles.form.label}>{label}</label>
                <input  id={id} style={styles.form.input}
                
               type={type}            
               readOnly={readOnly}            
               onChange={onChange} value={value}/>
               
             </div>
         
            
     );
};


export const DisplaySelectableFormField = ({field,hideValue,onChange,onToggleSelection})=>{
     var fieldType="text";
     if(field.nLines && field.nLines>1){
         fieldType="textarea";
     }          
     if(hideValue){
       fieldType="password";
     }
     return(       
         <InputWithCopy label={field.label} id={field.id} type={fieldType}
            value={field.value}  onSelected={onToggleSelection} secret={true}
            onChange={onChange}/>    
       );
};


