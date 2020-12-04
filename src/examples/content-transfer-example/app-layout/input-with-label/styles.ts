import styleMatchingScreenSize from '../styleMatchingScreenSize';
export var styles = {
    container: {
        display: "flex",
        flexDirection: "column" as 'column',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 10
    },
    field: {
        get: styleMatchingScreenSize,
        default: {
            width: "100%",
            fontSize: 12,
            color: "#5291CD",
            border: "1px solid #AAAAAA",
        },
        readOnly: {
            backgroundColor: "#CCCCCC"
        }
    },


    label: {
        get: styleMatchingScreenSize,
        default: {
            fontSize: 12,
            color: "#4880ED",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            transform: 'translateY(10px)',
            paddingLeft: 10
        },
        placeholder: {
            transform: 'translateY(30px)',
        }


    },
    areaLabel: {
        get: styleMatchingScreenSize,
        default: {
            fontSize: 12,
            color: "#4880ED",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            paddingLeft: 10,
            transform: 'translateY(5px)',
        },
        placeholder: {
            transform: 'translateY(30px)'
        }


    },

    help: {
        fontSize: 10,
        color: "#5291CD",
        paddingLeft: 5,
        paddingRight: 5
    }
};
