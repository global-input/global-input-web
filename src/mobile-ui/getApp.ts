import { useHistory } from 'react-router-dom';
import { useConnectToMobile } from '../mobile';
import * as pageMenu from './pageMenu';

export const useMobile = () => {
    const history = useHistory();
    const { ConnectToMobile,mobile  } = useConnectToMobile(initData);
    mobile.setOnchange(({ field }) => {
        onFieldChange(field, history);
    });
    return ConnectToMobile;
}

const initData = {
    form: {
        title: "Get Global Input App Software",
        fields: [{
            type: 'info',
            value: 'You need to operate on your computer to download the software.'
        }, {...pageMenu.FIELDS.home, icon:'home'}]
    }
};

const onFieldChange = (field, history) => {
    if (pageMenu.onFieldChange(field, history)) {
        return true;
    }
    return false;
}
