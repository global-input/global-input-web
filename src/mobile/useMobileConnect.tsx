import { InitData,OnchangeFunction } from './useMobile';
import {useConnectToMobile} from './useConnectToMobile';
interface MobileConnectProps {
    label?: string;
}

export const useMobileConnect = (initData: InitData | (() => InitData), onchange?: OnchangeFunction, initialConnect: boolean = false) => {
    const {mobile,ConnectToMobile}=useConnectToMobile(initData,initialConnect);
    onchange && mobile.setOnchange(onchange);
    return { ConnectToMobile};
};
