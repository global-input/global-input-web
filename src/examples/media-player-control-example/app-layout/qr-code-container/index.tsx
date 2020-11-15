import React from 'react';
const QRCodeContainer = ({ children }) => {
    return (
         <div style={styles.barcodeContainer}>
              <div style={styles.barcode}>
                   {children}
              </div>
         </div>
    );
};
export default QRCodeContainer;
const styles = {
    barcodeContainer: {
        position: "absolute" as 'absolute',
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(200,200,200,0.3)",
        display: "flex",
        flexDirection: "column" as 'column',
        justifyContent: "center",
        alignItems: "center"
      },
      barcode: {
        backgroundColor: "white",
        padding: 20,
        display: "flex",
        flexDirection: "column" as 'column',
        justifyContent: "flex-start",
        alignItems: "center"
      },
}