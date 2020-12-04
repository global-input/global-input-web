import { useHistory } from 'react-router-dom';
import { useConnectToMobile } from '../mobile';
import * as pageMenu from './pageMenu';

export const useMobile = () => {
    const history = useHistory();
    const onchange = ({ field }) => {
        onFieldChange(field, history);
    }
    const { MobileConnect } = useConnectToMobile(initData, onchange);
    return MobileConnect;
}

const initData = {
    form: {
        title: "About Mobile Content Transfer",
        fields: Object.values(pageMenu.FIELDS)
    }
};

const onFieldChange = (field, history) => {
    if (pageMenu.onFieldChange(field, history)) {
        return true;
    }
    return false;
}
