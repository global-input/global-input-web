import type {GlobalInputData} from 'global-input-react';////global-input-react////
import type {ConnectionSettings} from './storage';
export enum WidgetState {
    CONNECT_QR,
    SETTINGS,
    PAIRING
}
export interface MobileData extends GlobalInputData{
    isShowWidget:boolean;
    onSaveSettings:(settings:ConnectionSettings) =>void;
    loadSettings:()=>ConnectionSettings;
    widgetState:WidgetState;
    setWidgetState:(widgetState:WidgetState)=>void;
    setShowWidget:(isShowWidget:boolean)=>void;
}
