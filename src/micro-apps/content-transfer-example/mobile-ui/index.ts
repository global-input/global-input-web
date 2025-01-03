
import { useNavigate } from "react-router-dom"; ////website

/*
import { useGlobalInputApp,ConnectQR} from 'global-input-react';
*/

import { useMobile,ConnectWidget } from '../../../global-input-mobile';


import * as mobileUI from '../../../micro-apps/mobile-ui'; ////website


/*
const ConnectWidget=ConnectQR;
*/

export {ConnectWidget};

const FIELDS = {
    contentField: {
      id: "content",
      label: "Content",
      value: "",
      nLines: 10
    },
    info: {
      id: "info",
      type: "info",
      value: "You may paste content in the text box above to transfer it into the connected application."
    }
};

mobileUI.add(FIELDS);////website

const initData = {
    id: 'content-transfer-example',
    form: {
      title: "Content Transfer",
      fields: Object.values(FIELDS)
    }
 };

export const useConnectMobile = ({setContent}) => {
  const navigate = useNavigate();////website
/*
  const mobile = useGlobalInputApp({ initData });
*/
 const mobile = useMobile(initData, true);
  mobile.setOnchange(({ field }) => {
    switch (field.id) {
      case FIELDS.contentField.id:
        setContent(field.value as string);
        break;
      default:
      mobileUI.onFieldChange(field, navigate); ////website

    }
  });
  const onContentChanged=(content)=>{
    mobile.sendValue(FIELDS.contentField.id, content);
  }
  return {mobile,onContentChanged};

};
