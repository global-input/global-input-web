import React, { useState, useLayoutEffect } from 'react';
import { styles } from './styles';


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
};

export const ContentContainer=({children,row})=>{
     let st=styles.contentContainer.left;  
     if(row==='center'){
         st=styles.contentContainer.center;  
     }
     return(<div style={st.get()}>{children}</div>);
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


export const TextButton=({onClick,label})=>(
     <button style={styles.form.textButton} onClick={onClick}>{label}</button>
   );
   
