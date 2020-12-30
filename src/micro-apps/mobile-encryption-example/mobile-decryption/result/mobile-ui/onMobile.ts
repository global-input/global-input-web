import { useMobile } from '../../../mobile';
export const FIELDS = {
    info: {
        type: "info",
        value: 'Select the field to copy it into your clipboard.'
    },
    content: {
        id: "decryptedContent",
        label: "Decrypted Content",
        type: 'text',
        nLines: 5,
        value: ''
    },

    restart: {
        id: "restart",
        label: "Decrypt Again",
        type: "button",
        viewId: "row1"
    },
    finish: {
        id: "finish",
        label: "Finish",
        type: "button",
        viewId: "row1"
    },
};
const initData = (content) => ({
    form: {
        title: "Content To Decrypt",
        views: {
            viewIds: {
                row1:{
                    style:{
                        display:'flex',
                        justifyContent:'space-between',
                        width:'100%',
                    }
                }
                                }
        },
        fields: [FIELDS.info, { ...FIELDS.content, value: content },  FIELDS.restart, FIELDS.finish]
    }
});

export const useConnectMobile = ({content,restart,finish}) =>{
    const mobile = useMobile(()=>initData(content), true);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.restart.id:
                restart();
                break;
            case FIELDS.finish.id:
                finish();
                break;

            default:
        }
    });
    return mobile;
}
