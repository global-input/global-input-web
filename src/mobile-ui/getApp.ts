import { useHistory } from 'react-router-dom';
import { useMobileConnect } from '../mobile';
import * as pageMenu from './pageMenu';

export const useMobile = () => {
    const history = useHistory();
    const onchange = ({ field }) => {
        onFieldChange(field, history);
    }
    const { MobileConnect } = useMobileConnect(initData, onchange);
    return MobileConnect;
}

const initData = {
    form: {
        title: "Get App Page",
        fields: [{
            type: 'info',
            value: 'You can install the browser extension to connect your mobile to your browser'
        }, pageMenu.FIELDS.home, pageMenu.FIELDS.privacy, pageMenu.FIELDS.contactUs]
    }
};

const onFieldChange = (field, history) => {
    if (pageMenu.onFieldChange(field, history)) {
        return true;
    }
    return false;
}
