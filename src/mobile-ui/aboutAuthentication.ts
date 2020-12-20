import { useHistory } from 'react-router-dom';

import { useConnectToMobile } from '../mobile';
import * as exampleFields from './exampleFields';
import * as pageMenu from './pageMenu';

export const useMobile = () => {
    const history = useHistory();
    const { ConnectToMobile,mobile } = useConnectToMobile(initData);
    mobile.setOnchange(({ field }) => {
        onFieldChange(field, history);
    });
    return ConnectToMobile;
}
const initData = {
    form: {
        title: "Mobile Authentication",
        fields: [{...exampleFields.FIELDS.transferForm,label:'See It In Action'}, pageMenu.FIELDS.home]
    }
};

const onFieldChange = (field, history) => {
    if (exampleFields.onFieldChange(field, history)) {
        return true;
    }
    if (pageMenu.onHomeFieldChange(field, history)) {
        return true;
    }
    return false;
};
