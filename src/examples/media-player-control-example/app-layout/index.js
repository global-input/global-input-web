import React, { useState, useLayoutEffect } from 'react';
import { styles } from './styles';

export const QRCodeContainer = ({ children }) => {
     return (
          <div style={styles.barcodeContainer}>
               <div style={styles.barcode}>
                    {children}
               </div>
          </div>
     );
}

export const Title = ({ children }) => {
     return (<div style={styles.title}>{children}</div>);
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
export const P = ({ children }) => (<div style={styles.paragraph.get()}>{children}</div>);

export const A = ({ href, children }) => (<a href={href} style={styles.link} target="__blank">{children}</a>);

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