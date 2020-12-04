const styles = {
    loading: {
        display: "flex",
        flexDirection: 'row' as 'row',
        justifyContent: "center",
        fontSize: 20,
        fontWeight: 100,
        whiteSpace: 'nowrap' as 'nowrap'
    },
    title: {
        display: "flex",
        flexDirection: 'row' as 'row',
        justifyContent: "flex-start",
        fontSize: 20,
        fontWeight: 100,
        whiteSpace: 'nowrap' as 'nowrap',
        padding: 10,
        color: "#153E85"
    },
    qrCode: {
        minWidth: 450,
        minHeight: 450,
        display: "flex",
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    appContainer: {
        title: {
            minWidth: 100,
            minHeight: 20,
            width: "100%",
            backgroundColor: "#153E85",
            color: "white",
            display: "flex",
            flexDirection: 'row' as 'row',
            justifyContent: "center",
            fontFamily: "Avenir",
            fontSize: 20,
            fontWeight: 100,
            whiteSpace: 'nowrap' as 'nowrap',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
        },
        content: {
            minWidth: 100,
            minHeight: 100,
            display: "flex",
            flexDirection: "column" as 'column',
            justifyContent: "flex-start",
            alignItems: 'center',
        },


        errorMessage: {
            width: "100%",
            color: "red",
            display: "flex",
            flexDirection: "row" as 'row',
            justifyContent: "flex-start",
            fontFamily: "Avenir",
            fontSize: 15,
            fontWeight: 100,
            padding: 10
        },
        message: {
            width: "100%",
            color: "#153E85",
            fontFamily: "Avenir",
            fontSize: 15,
            fontWeight: 100,
            padding: 10
        },
        footer: {
            color: "#153E85",
            fontSize: 16,
            fontWeight: 100,
            display: 'flex',
            flexDirection: 'row' as 'row',
            justifyContent: 'space-between',
            alignItems: 'end',
            width: "100%",
            padding: 10,
            minWidth: "350px"
        }

    },




    domain: {
        width: "100%",
        fontFamily: "Avenir",
        fontSize: 16,
        paddingTop: 10,
        fontWeight: 100,
        color: "#153E85",
        whiteSpace: 'nowrap' as 'nowrap',
        display: "flex",
        flexDirection: "row" as 'row',
        justifyContent: "center",


    },

    message: {
        container: {
            minWidth: 300,
            minHeight: 30,
            display: 'flex',
            flexDirection: 'column' as 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            width: "100%",
            color: "#153E85",
            fontFamily: "Avenir",
            fontSize: 14,
            fontWeight: 100,
            padding: 20,
            display: 'block'
        },
        alink: {
            paddingLeft: 4,
            paddingRight: 4,
            backgroundColor: 'white',
            border: 0,
            color: "#153E85",
            fontWeight: 100,
            fontSize: 14,
            fontFamily: "Avenir",
        },
    },

    form: {
        container: {
            display: 'flex',
            flexDirection: 'column' as 'column',
            justifyContent: 'start',
            alignItems: 'start',
            width: "100%",
            minWidth: 300,
            padding: 10
        },
        fields: {
            display: 'flex',
            flexDirection: 'column' as 'column',
            justifyContent: 'start',
            alignItems: 'start',
            width: "100%",
        },
        footer: {
            display: 'flex',
            flexDirection: 'row' as 'row',
            justifyContent: 'space-between',
            alignItems: 'end',
            width: "100%",
            padding: 10
        }
    },
    rowCenter: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'center',
        alignItems: 'end',
        width: "100%"
    }

};
export default styles;