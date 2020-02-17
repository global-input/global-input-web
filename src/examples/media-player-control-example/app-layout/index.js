import React from 'react';
import {styles} from './styles';

export const QRCodeContainer=({children})=>{
     return(
     <div style={styles.barcodeContainer}>
         <div style={styles.barcode}>
               {children}
          </div>
     </div>
     );
}

export const Title=({children}) =>{
     return (<div style={styles.title}>{children}</div>);
}