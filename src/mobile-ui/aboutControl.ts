import { useHistory } from 'react-router-dom';
import * as pageMenu from './pageMenu';
import * as exampleFields from './exampleFields';

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
        fields: [{...exampleFields.FIELDS.game,label:'See It In Action'}, pageMenu.FIELDS.home]
    }

};

const onFieldChange = (field, history) => {
    if (exampleFields.onFieldChange(field, history)) {
        return true;
    }
    if (pageMenu.onFieldChange(field, history)) {
        return true;
    }
    return false;
};
