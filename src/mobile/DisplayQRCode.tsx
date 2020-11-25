import React from 'react';
import QRCodeLabel from './QRCodeLabel';

const DisplayQRCode = ({ ConnectQR, editConnectionSettings, onClose, restart, errorMessage }) => (
    <div style={styles.container}>
        <ConnectQR label={<QRCodeLabel editConnectionSettings={editConnectionSettings} onClose={onClose} restart={restart} errorMessage={errorMessage} />} />
    </div >
);
export default DisplayQRCode;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30,
        position: "absolute",
        zIndex: 100,
    } as React.CSSProperties,
    errorContainer: {
        backGroundColor: "white",
        display: 'flex',
        flexDirection: 'row',
    } as React.CSSProperties,
    error: {
        color: "red",
        fontFamily: "Avenir",
        fontSize: 11,
    },
    button: {
        backgroundColor: "white",
        borderWidth: 0,
        marginRight: 20,
        color: "#4880ED",
        border: '1px solid blue',
        fontSize: 11,
        borderRadius: 4,
        whiteSpace: "nowrap",
        padding: 5,
        display: "flex",
        flexDirection: "row" as 'row',
        justifyContent: "center",
        alignItems: "center"
    } as React.CSSProperties,
}