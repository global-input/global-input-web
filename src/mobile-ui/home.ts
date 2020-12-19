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
                row1: {
                    style: {
                        borderWidth: 2,
                        borderColor: '#EEEEEE',
                        marginBottom:20,
                        width:'98%',
                        backgroundColor:'rgb(225, 235, 245)'
                    }
                },
                row2: {
                    style: {
                        borderWidth: 2,
                        borderColor: '#EEEEEE',
                        marginBottom:20,
                        width:'98%',
                        backgroundColor:'rgb(225, 235, 245)'
                    }
                }
            }
        },
        fields: [{
            type: "info",
            viewId:'row2',
            value:{
                type: "view",
                style: {
                    width:'100%',
                    display:'flex',
                    fontSize:20,
                    color:'white',
                    flexDirection:'row',
                    backgroundColor:'rgb(74, 113, 205)'

                },
                content:'Micro Apps'
            }
        },{
            type: "info",
            viewId:'row1',
            value: {
                type: "view",
                style: {
                    width:'100%',
                    display:'flex',
                    fontSize:20,
                    color:'white',
                    flexDirection:'row',
                    backgroundColor:'rgb(74, 113, 205)'

                },
                content:'Pages to Navigate'
            },
        },
        ...Object.values(exampleFields.FIELDS),
        ...Object.values(pageMenu.FIELDS).filter(f=>f.id!==pageMenu.FIELDS.home.id)
        ]
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
