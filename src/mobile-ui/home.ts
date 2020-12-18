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
    id: "website-home",
    form: {
        title: "Global Input App",
        views: {
            viewIds: {
                row9: {
                    style: {
                        borderWidth: 1,
                        borderColor: '#EEEEEE'
                    }
                }
            }
        },
        fields: [{
            type: "info",
            value: "Pages to Navigate"
        },pageMenu.FIELDS.privacy, pageMenu.FIELDS.contactUs, pageMenu.FIELDS.getItFree, ...Object.values(exampleFields.FIELDS)]
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
