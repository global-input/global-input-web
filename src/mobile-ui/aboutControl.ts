import { useHistory } from 'react-router-dom';
import * as pageMenu from './pageMenu';
import { useMobileConnect } from '../mobile';

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
        title: "About Input & Control",
        fields: Object.values(pageMenu.FIELDS)
    }
};

const onFieldChange = (field, history) => {
    if (pageMenu.onFieldChange(field, history)) {
        return true;
    }
    return false;
};
