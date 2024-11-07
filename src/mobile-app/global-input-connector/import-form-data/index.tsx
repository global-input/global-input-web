import React from 'react';

import {DecryptImportView, DATA_SOURCE_TYPE} from "../../others/restore-data/decrypt-import-view";

interface Props{
    action:any;
    setAction: (action:any) =>void;
    onFinish:()=>void;
}
export const ImportFormData:React.FC<Props>=({action,onFinish})=>{
    const importFormField = action.importFormField;
    
    return <DecryptImportView onBack={onFinish} content={importFormField.value} dataSourceType={DATA_SOURCE_TYPE.CONNECTED_DEVICE}/>

}