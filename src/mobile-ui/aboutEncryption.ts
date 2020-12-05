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
        title: 'About Mobile Encryption',
        fields: [pageMenu.FIELDS.home]
    }
};

const onFieldChange = (field, history) => {
    if (pageMenu.onFieldChange(field, history)) {
        return true;
    }
    return false;
};
