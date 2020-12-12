import React from 'react';
const QRCodeContainer = ({ children }) => {
     return (
          <div style={styles.barcodeContainer}>
               {children}
          </div>
     );
};
export default QRCodeContainer;
const styles = {
     barcodeContainer: {
          position: "absolute" as 'absolute',
          top: 50,
          width: "100%",
          display: "flex",
          flexDirection: "column" as 'column',
          justifyContent: "center",
          alignItems: "center"
     },

}