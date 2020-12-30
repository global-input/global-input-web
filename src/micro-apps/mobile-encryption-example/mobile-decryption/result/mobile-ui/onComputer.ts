import { useMobile } from '../../../mobile';
export const FIELDS = {
    info: {
        type: "info",
        value: "You can now check the connected application, which should have received the decrypted content."
    },
    restart: {
        id: "restart",
        label: "Decrypt Again",
        type: "button",
        viewId: "row1"
    },
    contentOnMobile: {
        id: "contentOnMobile",
        type: "button",
        label: "Press here to load the decrypted content into your mobile app",
        viewId: "row2",
        style:{
            maxWidth:200,
            padding:20,
            backgroundColor:'#EEEEEE'
        },

    },

    finish: {
        id: "finish",
        label: "Finish",
        type: "button",
        viewId: "row1"
    },
};

const initData = {
    form: {
        title: "Decrypted content has been sent",
        views: {
            viewIds: {
                info: {
                    style: {
                        marginBottom:20,
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center'
                    }
                },
                row1:{
                    style:{
                        display:'flex',
                        justifyContent:'space-between',

                        width:'100%',


                    }


                }
                                }
        },

        fields: Object.values(FIELDS)
    }
};

export const useConnectMobile = ({restart,onShowOnMobile,finish}) =>{
    const mobile = useMobile(initData, true);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.restart.id:
                restart();
                break;
            case FIELDS.contentOnMobile.id:
                onShowOnMobile();
                break;
            case FIELDS.finish.id:
                finish();
                break;
            default:
        }
    });
    return mobile;
}
