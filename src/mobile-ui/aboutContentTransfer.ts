import { useHistory } from 'react-router-dom';
import { useConnectToMobile } from '../mobile';
import * as pageMenu from './pageMenu';
import * as exampleFields from './exampleFields';

export const useMobile = () => {
    const history = useHistory();
    const { ConnectToMobile,mobile} = useConnectToMobile(initData);
    mobile.setOnchange(({ field }) => {
        onFieldChange(field, history);
    });
    return ConnectToMobile;
}

const initData = {
    form: {
        title: "About Mobile Content Transfer",
        fields: [{...exampleFields.FIELDS.contentTransfer,label:'See It In Action'}, pageMenu.FIELDS.home]
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
}
