import React from 'react';

const ConnectionError = ({ errorMessage, editConnectionSettings }) => (
    <div style={styles.container}>
        <div style={styles.content}>
            <div style={styles.message}>{errorMessage}</div>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={editConnectionSettings}>Settings</button>
            </div>
        </div>
    </div>
);
export default ConnectionError;



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
        position: "absolute",
        zIndex: 100,

    } as React.CSSProperties,
    content: {
        width: 400,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    } as React.CSSProperties,
    message: {
        backGroundColor: 'white',
        color: 'red'
    },
    buttonContainer: {



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