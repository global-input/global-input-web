import {encrypt,decrypt} from "global-input-react";

export const visibility = (()=>{
    const field={
        id:"fieldValueVisibility",
        type:'button',  
        viewId: "row2",            
        options: [{ value: 0, label: 'Show' }, { value: 1, label: 'Hide'}],        
        value:0
    };
    const getNext=option=>{
        return option===field.options[0]?field.options[1]:field.options[0];
    };

    const getDefaultOption = () => {
        return field.options[1];
    };
    const buttonPressed = f => {
        return f.id===field.id;        
    };    
    const buildField = value => {
        return {...field,value};   
    };
    return {
        field,
        getNext,
        getDefaultOption,
        buttonPressed,
        buildField        
    };
})();


export const form=(()=>{
        const defaultForm={    
            id:"###username###@domain.com",
            title:"Credential",
            label:"members",
            fields:[
                {id:"username",label:"Username", value:'',selected:false},
                {id:"password",label:"Password", value:'',selected:false},
                {id:"note",label:"Note", value:'',selected:false}
            ]
        };
        const addNewField={
            id:"addNewField",
            type:"button",
            label:"Add New Field",
            viewId:"row1"
        };
        const deleteFields={
            id:"deleteFields",
            type:"button",
            label:"Delete Fields",
            viewId:"row1"
        };
        const changeFormField={
            id:"changeForm",
            type:"button",
            label:"Change Form",
            viewId:"row2"
        };
        const setMobileFieldValue = (globalInputApp, field,value)=>{
            const {fields,setters}=globalInputApp;
            let valueSent=false;

            if(fields && setters){
                fields.forEach((f,index)=>{
                        if(f.id===field.id){
                            setters[index](value); 
                            valueSent=true;                           
                        }
                });
                if(!valueSent){
                  console.warn("value is not set because id does not match:"+field.id);
                }
                else{
                    console.log("value is sent");

                }
            }
            else{
                console.log("not sent because fields:"+fields+"  setters:"+setters);
            }
            
        };
        const setMobileVisibilityValue = (globalInputApp, value) => {
            setMobileFieldValue(globalInputApp,visibility.field,value);
        };
        const getInitData = (form,vis) => {
            const fields=[]
            
            fields.push(addNewField);
            if(form && form.fields && form.fields.length){
                fields.push(deleteFields);                
            }
            fields.push(changeFormField);
            fields.push(visibility.buildField(vis.value));

            form.fields.forEach(f=>{         
                fields.push({...f});                
            });
             

            const initData = {
                 action: "input",
                 dataType: "form",
                 form:{...form}
            };
             initData.form.fields=fields;
             return initData;
        };

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
    
    const encryptionKey='TDwtv0dV6u';
    const encoderFormData = formData => {
            return encrypt(JSON.stringify(formData),encryptionKey);
    };       
    const decodeFormData = formData => {
            return JSON.parse(decrypt(formData,encryptionKey))
    };
    const buildInitialForm = ({location}) => {        
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
    const updateField= ({form,field, value})=>{
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
    };
    const addFieldButtonPressed = f => {
        return f.id===addNewField.id;        
    };
    const deleteFieldsButtonPressed=f=>{
        return f.id===deleteFields.id;        
    };
    const changeButtonPressed=f=>{
        return f.id===changeFormField.id;        
    }

    const createNewFormNewField = ({form,label, multiLine}) => {
        let newLabel=label.trim();
        if(!newLabel){
            return form;
        }
        const nLines=multiLine?5:1;
        const id=newLabel.replace(' ',"_").toLowerCase();
        for(let f of form.fields){
            if(f.id===id){
                return form;
            }
        }
        const fields=[...form.fields,{id,label:newLabel,value:'',nLines}];
        return {...form,fields};        
    };
    const createNewFormDeleteFields = ({form,items}) => {
        if(!items||!items.length){
            return form;            
        }
        const itemsToDelete=items.filter(itm=>itm.selected);
        if(!itemsToDelete.length){
            return form;
        }        
        const fields=form.fields.filter(f=>{
             const matchedItems=itemsToDelete.filter(itm=>itm.value===f.id);
            return !matchedItems.length;
        });        
        return {...form, fields};        
    };
    const createNewFormWithAttributes =({form,formTitle, formId, formLabel}) =>{
        if(!formId.trim().length){
            return form;
        }
        return {...form, title:formTitle,id:formId,label:formLabel};        
    };
    
        
        return {
            setMobileFieldValue,
            getInitData,
            buildInitialForm,
            updateField,
            setMobileVisibilityValue,
            addFieldButtonPressed,
            changeButtonPressed,
            createNewFormNewField,
            createNewFormDeleteFields,
            deleteFieldsButtonPressed,
            createNewFormWithAttributes
        }
        

})();


export const addNewField= (()=>{
        const controlFields=[{
            id:"nameOfNewField",
            type:"text",
            value:""
        },{
            id:"multiLines",
            label:"Type",
            type:"list",
            selectType:"single",
            value:'single-line',
            items:[
                {value:"single-line", label:"Single-line"},
                {value:"multi-line", label:"Multi-line"}                            
            ]
        },{
            id:"cancelAdd",
            label:"Cancel",
            type:"button",
            viewId:"row1"               
        },{
            id:"addNew",
            label:"Add",
            type:"button",
            viewId:"row1"               
        }];        
      const cancelButtonPressed=field=>field.id==='cancelAdd';
      const labelFieldModified=field=>field.id==='nameOfNewField';      
      const addNewButtonPressed=field=>field.id==='addNew';      
      const setFieldNameOnMobile=(globalInputApp,value)=>{
            const {setters}=globalInputApp;
            const [setName]=setters;
            setName(value);            
      };
      
      const getMultiLineField=fields=>{
            for(let f of fields){
                if(f.id==='multiLines'){
                    return f;
                }
            }
            return null;
      }
      
      const getInitData=({multiLine})=>{
         const value=multiLine?'multi-line':'single-line';
         const fields=controlFields.map(f=>{
                if(f.id==='multiLines'){
                    return {...f, value};
                }
                else{
                    return f;
                }
         })         
         return {
            action: "input",
            dataType: "form",
            form:{
                title:"Add New Field",
                fields
            }
          };      
      };
      const pressedMultiLineOptionIndex=field=>{
            if(!field){
                return -1;
            }    
            const multiLineField=getMultiLineField(controlFields);

            if(field.id!==multiLineField.id){            
                return -1;
            }
            
            if(!field.value){
                return;                
            }
            
            for(let [index,item] of multiLineField.items.entries()){
                if(item.value===field.value[0]){
                    return index;
                }
            }
            return -1;
      }; 
      const setMultiLineOnMobile=(globalInputApp,multiLine)=>{
        const {setters}=globalInputApp;
        const [setName,setFieldLines]=setters;
        const multiLineField=getMultiLineField(controlFields);
        if(multiLine){
            setFieldLines([multiLineField.items[1].value]);
        }
        else{
            setFieldLines([multiLineField.items[0].value]);
        }
      };    
      return{
        getInitData,
        cancelButtonPressed,
        labelFieldModified,
        setFieldNameOnMobile,
        pressedMultiLineOptionIndex,
        addNewButtonPressed,
        setMultiLineOnMobile
        

      }




})();



export const deleteFields= (()=>{
    const controlFields=[{
                id:"fieldsToDelete",
                label:"Select",
                type:"list",                
                selectType:"multiple",
                value:null,
                items:[]
            },{
                id:"cancelDelete",
                label:"Cancel",
                type:"button",
                viewId:"row1"
            },{
                id:"deleteSelected",
                label:"Delete",
                type:"button",
                viewId:"row1"
            }];            
    const getInitData=({form})=>{
          const items=createItems(form);
          const fields=controlFields.map(f=>{
              if(f.id==='fieldsToDelete'){
                    return {...f, items};
              }
              else{
                  return f;
              }
          });          
          return {              
            action: "input",
            dataType: "form",
            form:{
                title:"Delete Fields",
                fields
            }
          };
    };
    const createItems =form => {
        const items=[];
        form.fields.forEach(f=>{
          items.push({label:f.label, value:f.id});            
        });
        return items;
    };
    const createSelectableItems=form=>{
            const items=createItems(form);
            items.forEach(itm=>itm.selected=false);
            return items;
    }
    const cancelButtonPressed=field=>field.id==='cancelDelete';
    const deleteButtonPressed=field=>field.id==='deleteSelected';
    const toggleSelect = (items, item) => {
        const newItems=items.map(itm=>{
            if(itm.value===item.value){
                return {...itm, selected:!itm.selected};
            }else{
                return itm;
            }
        });
        return newItems;
    };
    const updateSelection = (items, values) => {
        const newItems=items.map(itm=>{
            if(values && values.length>0){
                for(let value of values){
                    if(itm.value===value){
                        return {...itm, selected:true};
                    }
                }
            }            
            return {...itm, selected:false};            
        });
        return newItems;
    };
    const updateSelectionOnMobile=(globalInputApp,items)=>{
        const {setters}=globalInputApp;
        const [setFieldSelection]=setters;
        const values=[];
        
        items.forEach(itm=>{
            if(itm.selected){
                values.push(itm.value);
            }
        });
        setFieldSelection(values);
    }; 

    const fieldSelected=field=>field.id==='fieldsToDelete';

    return {
        getInitData,
        createSelectableItems,
        cancelButtonPressed,
        toggleSelect,
        fieldSelected,
        updateSelection,
        updateSelectionOnMobile,
        deleteButtonPressed
    }

    


})();


export const changeForm= (()=>{
    const controlFields=[{
                id:"formTitle",
                label:"Form Title",
                type:"text",                
                value:''                
            },{
                id:"formID",
                label:"Form ID",
                type:"text",
                value:''                
            },{
                id:"formLabel",
                label:"Form Label",
                type:"text"                
            },{
                id:"cancelEdit",
                label:"Cancel",
                type:"button",
                viewId:"row1"
            },{
                id:"updateForm",
                label:"Update",
                type:"button",
                viewId:"row1"
            }];

            const getInitData=({form})=>{   
                const {id,title,label}=form;             
                const fields=controlFields.map(f=>{
                    if(f.id==='formTitle'){
                          return {...f, value:title};
                    }
                    else if(f.id==='formID'){
                          return {...f, value:id};
                    }
                    else if(f.id==='formLabel'){
                          return {...f, value:label};
                    }
                    else{
                          return f;
                    }
                });          
                return {              
                  action: "input",
                  dataType: "form",
                  form:{
                      title:"Delete Fields",
                      fields
                  }
                };
          }; 
          const cancelButtonPressed=field=>field.id==='cancelEdit';
          const titleFieldModified=field=>field.id==='formTitle';      
          const idFieldModified=field=>field.id==='formID';      
          const labelFieldModified=field=>field.id==='formLabel';
          const updateButtonPressed=field=>field.id==='updateForm';      
          const setFormTitleOnMobile=(globalInputApp,value)=>{
            const {setters}=globalInputApp;
            const [setFormTitle]=setters;
            setFormTitle(value);            
          };
          const setFormIdOnMobile=(globalInputApp,value)=>{
            const {setters}=globalInputApp;
            const [setFormTitle,setFormId]=setters;
            setFormId(value);            
          };
          const setFormLabelOnMobile=(globalInputApp,value)=>{
            const {setters}=globalInputApp;
            const [setFormTitle,setFormId, setFormLabel]=setters;
            setFormLabel(value);            
          };
          return {
            getInitData,
            cancelButtonPressed,
            titleFieldModified,
            idFieldModified,
            labelFieldModified,
            setFormTitleOnMobile,
            setFormIdOnMobile,
            setFormLabelOnMobile,
            updateButtonPressed
          }
            
})();