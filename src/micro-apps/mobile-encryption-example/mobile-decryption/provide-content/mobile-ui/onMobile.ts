import { useMobile } from '../../../mobile';
export const FIELDS = {
    content: {
        id: "contentOnMobile",
        type: 'text',
        nLines: 5,
        value: '',
        viewId: "row2",
    },
    info: {
        id: "info",
        type: "info",
        viewId: "row2",
        value: 'You can now also use your mobile to enter content (via the text box above) on the connected application.'
    },
    cancel: {
        id: 'cancel',
        type: 'button',
        label: 'Cancel',
        viewId: "row3",
        icon:'cancel'
    },

    decrypt: {
        id: "toDecrypt",
        type: "button",
        label: "Decrypt",
        viewId: "row3",
        icon:'decrypt'
    }
}
const initData = (initialContent) => ({
    form: {
        title: "Content To Decrypt",
        views: {
            viewIds: {
                row3:{
                    style:{
                        display:'flex',
                        justifyContent:'space-between',
                        width:'100%',
                    }
                }
                                }
        },
        fields: [{ ...FIELDS.content, value: initialContent }, FIELDS.info, FIELDS.cancel, FIELDS.decrypt]
    }
});

export const useConnectMobile = ({initialContent,cancel,setContent,onDecrypt}) =>{
    const mobile = useMobile(()=>initData(initialContent), true);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.content.id:
                setContent(field.value as string);
                break;
            case FIELDS.cancel.id:
                cancel();
                break;
            case FIELDS.decrypt.id:
                onDecrypt();
                break;
            default:
        }
    });
    return mobile;
}
