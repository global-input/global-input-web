import React from 'react';

const QRCodeLabel = ({ editConnectionSettings, onClose, errorMessage, restart }) => {

    return (
        <div style={styles.container}>
            {errorMessage && (
                <div style={styles.message}>{errorMessage} <button onClick={restart} style={styles.button}>Disconnect</button></div>)}
            <div style={styles.row}>
                <button style={styles.button} onClick={editConnectionSettings}>Settings</button>
                <div style={styles.label}>
                    Scan with <a href="https://globalinput.co.uk/global-input-app/get-app" rel="noopener noreferrer" target="_blank"> Global Input App</a>
                </div>
                <button onClick={onClose} style={styles.button}>Close</button>
            </div>
        </div>
    );
}
export default QRCodeLabel;

const styles = {
    message: {
        color: "red",
        fontFamily: "Avenir",
        fontSize: 11,
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        width: '100%',
    } as React.CSSProperties,
    row: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        alignItems: 'flex-end'
    } as React.CSSProperties,
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
    label: {
        paddingTop: 20,
        color: "#A9C8E6", //#4880ED
    },
}