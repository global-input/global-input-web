import React, { useMemo } from 'react';
import { QRCodeLabel } from './QRCodeLabel';
import { ConnectQRProps } from 'global-input-react';////global-input-react////

interface Props {
    ConnectQR: React.FC<ConnectQRProps>;
    editConnectionSettings?: () => void;
    onClose?: () => void;
    restart: () => void;
    isConnectionDenied: boolean;

}

export const DisplayQRCode: React.FC<Props> = ({ ConnectQR, editConnectionSettings, onClose, restart, isConnectionDenied }) => {
    const label = useMemo(() => {
        return (<QRCodeLabel editConnectionSettings={editConnectionSettings} onClose={onClose} restart={restart} errorMessage={isConnectionDenied && "You can only use one mobile app per session. Disconnect to start a new session."} />);
    }, [isConnectionDenied, editConnectionSettings, onClose, restart]);
    return (
        <div style={styles.container}>
            <ConnectQR label={label} />
        </div >
    );


};


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