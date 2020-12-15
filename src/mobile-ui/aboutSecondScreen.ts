import { useHistory } from 'react-router-dom';
import { useMobileConnect } from '../mobile';
import * as exampleFields from './exampleFields';
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
        title: "About Second Screen Experience",
        fields: [{...exampleFields.FIELDS.secondScreen,label:'See It In Action'}, pageMenu.FIELDS.home]
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
