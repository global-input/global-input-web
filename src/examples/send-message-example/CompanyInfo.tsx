import React, { useState, useRef, useEffect } from "react";
import {useGlobalInputApp} from 'global-input-react';
import {Title, P, PageContainer,A,DisplayInputCopyField,InputWithLabel, TextButton,SelectableInput,SelectionContainer, RadioButton,CheckboxButton} from './app-layout';

const backField={
    id: "back",  
    type: "button",
    label:"back",
    icon:"back",
    viewId:"footer"                
}

const initData={
    action:"input",
    dataType:"form",
    form:{
          id:"###company_name###@iterative",
          title:"Our Contact Details",
          label:"contacts",
          fields:[{
            id:"company_name",
            type:"text",
            label:"Company Name",
            value:"Iterative Solution"
        
           },{
            id:"address",
            label:"Address",
            type:"text",
            nLines:5,
            value:"Iterative Solution Limited \n Kemp House \n \n 152-160 \n City Road\n London EC1V 2NX"
           },{
            id:"phone",
            label:"Phone",
            type:"text",
            value:"020 3290 6278"
           },{
            id:"email",
            label:"Email",
            type:"text",
            value:"info@iterativesolution.co.uk"
           },{
            id:"info",
            type:"info",
            value:["You may save our contact info by pressing \"Save\" button. Note that the 'save' button will not be displayed if the identical information already exists in your mobile storage."],
           },backField]
    }
};

export default ({backToHome})=>{
    const mobile = useGlobalInputApp({initData});            
    mobile.setOnchange(({field})=>{
        switch(field.id){
            case backField.id:
                backToHome();
        }
    });
    return(
        <PageContainer>                                  
        <Title>Our Contact Details</Title>
        <mobile.ConnectQR/>
            {mobile.isConnected && (<>

        <P>Our contact details are displayed on your mobile screen. You can save it into your mobile storage by pressing the "save" button</P>                        
        </>)}
        </PageContainer>                                  
    );                           
                   

};



