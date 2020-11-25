import React from 'react';
import appIcon from './app-icon.png';
const ConnectButton = ({ onClick }) => (
    <div style={styles.container}>
        <button style={styles.button} onClick={onClick}>
            <img src={appIcon} alt="global input app icon" />
            Connect
            </button>
    </div>
);
export default ConnectButton;

const styles = {
    container: {
        flex: 'display',
        flexDirection: 'row' as 'row',
        justifyContent: 'flex-start',
        width: "100%"
    },
    button: {
        textDecoration: "none",
        fontSize: 11,
        borderRadius: 4,
        color: "#4281BD",
        backgroundColor: "white",
        whiteSpace: "nowrap" as 'nowrap',
        padding: 5,
        minWidth: 20,
        marginLeft: 20,
        marginTop: 20,
        display: "flex",
        flexDirection: "row" as 'row',
        justifyContent: "center",
        alignItems: "center"
    },


}