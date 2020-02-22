import {encrypt,decrypt} from "global-input-react";
const defaultForm={    
        id:"###username###@domain.com",
        title:"Sign In",
        label:"members",
        fields:[
              {id:"username",label:"Username", value:'',selected:false},
              {id:"password",label:"Password", value:'',selected:false}
        ]
};
export const visibility = (()=>{
    const field={
        id:"fieldValueVisibility",
        type:'button',
        options: [{ value: 0, label: 'Show' }, { value: 1, label: 'Hide'}],        
        value:0
    };
    const getNext=option=>{
        return option===field.options[0]?field.options[1]:field.options[0];
    };

    const getDefaultOption = () => {
        return field.options[1];
    };
    const matchId = f => {
        return f.id===field.id;        
    };    
    const buildField = value => {
        return {...field,value};   
    };
    return {
        field,
        getNext,
        getDefaultOption,
        matchId,
        buildField
    };
})();



    

const getQueryParam = (query,variable) => {
        if(!query){
             return null;
        }
        query=query.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
               var pair = vars[i].split('=');
               if (decodeURIComponent(pair[0]) === variable) {
                   return decodeURIComponent(pair[1]);
               }
        }
        return null;
};

const encryptionKey="TDwtv0dV6u";
const encoderFormData = formData => {
    return encrypt(JSON.stringify(formData),encryptionKey);
};

const decodeFormData = formData => {
    return JSON.parse(decrypt(formData,encryptionKey))
};

export const buildInitialForm = ({location}) => {        
        if(!location || !location.search){
            return defaultForm;                
        }                                                
        var formDataString=getQueryParam(location.search, "formData");
        if(!formDataString){
            return defaultForm;

        }        
        try{
                var formFromQuery=decodeFormData(formDataString);
                if(formFromQuery){                    
                    return formFromQuery;
                }                    
        }
        catch(e){
                            console.error(e+" while processing the formDataString");                                                  
        }
        
        return defaultForm;                       
};

export const updateField= ({form,field, value})=>{
    const newFields=form.fields.map(f=>{
        if(f.id===field.id){
            return {...f,value:value};
        }
        else{
            return f;
        }
     });
    const newForm={...form};
    newForm.fields=newFields;
    return newForm;    
}


export const buildInitData = (form,vis) => {
    const fields=form.fields.map(f=>{         
         return {...f};                
    });
    

    fields.push(visibility.buildField(vis.value));
     const initData = {
         action: "input",
         dataType: "form",
         form:{...form}
     };
     initData.form.fields=fields;
     return initData;
};

