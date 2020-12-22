import { useHistory } from 'react-router-dom';
import {useMobile} from '../../mobile';
import { config } from '../../configs';
export * from '../../mobile';
export const useConnectToMobile=()=>{
    const history = useHistory();
    const mobile = useMobile(initData);
    mobile.setOnchange(({ field }) => {
        onFieldChange(field, history);
    });
    return mobile;
};

const FIELDS={
    sendMessage: {
        id: 'send-message-example',
        type: 'button',
        label: 'See It In Action',
        icon: 'save',
        viewId: "row2"
    },
    home:{
        id: 'back-to-website-home',
        type: 'button',
        label: 'Home',
        viewId: "row1",
        icon:'home'
    }


};

const initData = {
    id: 'about-mobile-secure-storage',
    form: {
        title: "Mobile Secure Storage",
        views: {
            viewIds: {
                row1: {
                    style: {
                        borderWidth: 2,
                        borderColor: '#EEEEEE',
                        marginBottom:50,
                        width:'98%',
                        backgroundColor:'rgb(225, 235, 245)',

                    }
                },
            }
        },
        fields:Object.values(FIELDS)
    }
};



const onFieldChange = (field, history) => {
    switch (field.id) {
        case FIELDS.home.id:
            history.push('/');
            break;
        case FIELDS.sendMessage.id:
                history.push(config.paths.examples.sendMessage.path);
                break;
        default:
    }
    return false;
}
