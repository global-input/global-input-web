import React, {useReducer, useState, useRef, useEffect} from 'react';
import QRCode from "qrcode.react";
import * as globalInput from "../globalInput";
const ActionType={
    SET_SIZE:1,
    SET_LEVEL:2
}

const initialData={
    size: 400,
    level:'H'
}
export default ({content, label}) => {
    const [state,dispatch] = useReducer(reducer,initialData);
    useEffect(()=>{
        const setSize = size => dispatch({type:ActionType.SET_SIZE,size});
        const setLevel = level => dispatch({type:ActionType.SET_LEVEL,level});
        const printQRCode=()=>{
            window.print();
        }
        globalInput.qrCodeService.generateQRCode({setSize,setLevel,printQRCode});         
    },[]);  
    if(content){
        return(
        <div style={styles.container}>
            <QRCode value={content} level={state.level} size={state.size}/>
        </div>
        
        )
    }
    else{
          return null;
    }    
};


const reducer = (state, action) => {
        switch(action.type){
            case ActionType.SET_SIZE:  return {...state, size:action.size};
            case ActionType.SET_LEVEL: return {...state, level:action.level};
            default:
                return state;            
        };        
};


const styles={
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        margin:50
    }
};
