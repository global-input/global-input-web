import { useHistory } from 'react-router-dom';
import {useMobile} from '../../mobile';
export const useConnectToMobile=()=>{
    const history = useHistory();
    const mobile = useMobile(initData);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.home.id:
                history.push('/');
                break;
            default:
        }
    });
    return mobile;
};

const FIELDS={
    info:{
            type: 'info',
            value: 'You need to operate on your computer to download the software.'
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
    form: {
        title: "Get Global Input App Software",
        fields:Object.values(FIELDS)
    }
};
