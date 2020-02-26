export const contact = (()=>{
    
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
                value:["You may save our contact info by pressing \"Save\" button."],
               },{
                id: "toSendMessage",  
                type: "button",
                label:"Send Message To Us",
                icon:"continue",
                viewId:"footer"                
            }]
        }
    };
    const getInitData=()=>{
        return initData;
    }
    const isSendMessageButtonPressed=field=>field.id==='toSendMessage';
    return {
        getInitData,
        isSendMessageButtonPressed
    }
})();


export const sendMessage=(()=>{
    var initData={
        action:"input",
        dataType:"form",
        form:{
            id:"###email###@me",
            title:"Sending a Message",
            label:"contacts",
            fields:[{
                id:"first_name",
                type:"text",
                label:"First Name",
                value:""            
          }]
        }
};
const first_name={
      id:"first_name",
      type:"text",
      label:"First Name",
      value:"",
      operations:{
          onInput:fistName=>this.setFirstName(fistName)
      }
};
initData.form.fields.push(first_name);
this.mobile.setFirstName=value=>{
  this.mobile.sendMessage(value,first_name.id);
}


const last_name={
      id:"last_name",
      type:"text",
      label:"Last Name",
      value:"",
      operations:{
          onInput:lastName=>this.setLastName(lastName)
      }
};
initData.form.fields.push(last_name);
this.mobile.setLastName=value=>{
  this.mobile.sendMessage(value,last_name.id);
}


const email={
      id:"email",
      type:"text",
      label:"Email",
      value:"",
      operations:{
          onInput:email=>this.setEmail(email)
      }
};
initData.form.fields.push(email);

this.mobile.setEmail=value=>{
  this.mobile.sendMessage(value,email.id);
}


const phone={
      id:"phone",
      type:"text",
      label:"Phone",
      value:"",
      operations:{
          onInput:phone=>this.setPhone(phone)
      }
};
initData.form.fields.push(phone);

this.mobile.setPhone=value=>{
  this.mobile.sendMessage(value,phone.id);
}

const message={
      type:"text",
      label:"Message",
      value:"",
      nLines:5,
      operations:{
          onInput:message=>this.setMessage(message)
      }
};
initData.form.fields.push(message);




const cancelButton={
      label:"Cancel",
      type:"button",
      viewId:"footer",
      operations:{
          onInput:()=>{
                this.mobile.disconnect();

          }
      }
};
initData.form.fields.push(cancelButton);

const sendButton={
      label:"Send",
      type:"button",
      viewId:"footer",
      operations:{
          onInput:this.sendMessage.bind(this)
      }
};
initData.form.fields.push(sendButton);
this.mobile.changeInitData(initData);
this.setState(this.workflow.steps.messageForm.buildState());
})();

