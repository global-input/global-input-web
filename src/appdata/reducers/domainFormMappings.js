import * as generalUtil from './generalUtil';
const initialState={        
     domainToIds:[]    
}
const ActionNames={     
     ATTACH_TO_DOMAINS:1,
     DELETE_FORM_ID:2,
     UPDATE_ATTACHED_DOMAINS:3,
     DELETE_ALL:4,
     DELETE_A_DOMAIN:5
}

const transformer={
     attacheToDomains: (state,formId,domains) => {
          const domainToIds=[];     
          let domainsToAttach=[...domains];     
          state.domainToIds.forEach(domainMapping=>{
               
                if(generalUtil.domainMappingMatchOneOf(domainMapping,domainsToAttach)){               
                    if(generalUtil.domainHasFormId(domainMapping, formId)){
                         domainToIds.push(domainMapping); //already attached
                    }
                    else{
                         const formIds=[...domainMapping.formIds,formId];
                         const newDomainFormMap={...domainMapping,formIds};
                         domainToIds.push(newDomainFormMap);
                    } 
                    domainsToAttach=domainsToAttach.filter(d=>d!==domainMapping.domain);                             
                }
                else if(generalUtil.domainHasFormId(domainMapping, formId)){
                     //should remove the mapping
                    const formIds=domainMapping.formIds.filter(fid=>fid!==formId);
                    if(formIds.length){
                         const newDomainFormMap={...domainMapping,formIds};
                         domainToIds.push(newDomainFormMap);
                    }
                    else{
                         console.log("map is removed:"+domainMapping.domain);
                    }
                }
                else{
                     //not changed
                     domainToIds.push(domainMapping);               
                }
          });
          domainsToAttach.forEach(domain=>{          
               const domainMapping={domain,formIds:[formId]};
               domainToIds.push(domainMapping);               
               
          });
          return {...state,domainToIds};     
     },
     deleteFormId: (state,formId) => {
          const domainToIds=[];          
          state.domainToIds.forEach(domainMapping=>{                                   
                if(generalUtil.domainHasFormId(domainMapping, formId)){
                     //should remove the mapping
                    const formIds=domainMapping.formIds.filter(fid => fid!==formId);
                    if(formIds.length){
                         const newDomainFormMap={...domainMapping,formIds};
                         domainToIds.push(newDomainFormMap);
                    }
                    else{
                         console.log("map is removed:"+domainMapping.domain);
                    }
                }
                else{
                     //not changed
                     domainToIds.push(domainMapping);               
                }
          });     
          return {...state,domainToIds};        
     },
     deleteAllMappings: state=>{
          return {...initialState};
     },
     deleteADomain: (state,domain) => {
          const domainToIds=state.domainToIds.filter(domainMapping=>domainMapping.domain!==domain);
          return {...state,domainToIds};
     }
};






export const domainFormMappings={
     reducer: (state=initialState, action) => {
          switch(action.type){
               case ActionNames.ATTACH_TO_DOMAINS:                         
                         return transformer.attacheToDomains(state,action.formId,action.domains);
               case ActionNames.DELETE_FORM_ID:                         
                         return transformer.deleteFormId(state,action.formId);                         
               case ActionNames.UPDATE_ATTACHED_DOMAINS:
                         const {domains}=action;
                         const st=transformer.deleteFormId(state,action.oldFormId);
                         return transformer.attacheToDomains(st,action.newFormId,domains);                         
               case ActionNames.DELETE_ALL: 
                         return transformer.deleteAllMappings(state);                               
               case ActionNames.DELETE_A_DOMAIN:
                         return transformer.deleteADomain(state,action.domain);
               default:
                    return state;

          }
     },
     actions: {
                    attachToDomains:(formId,domains)=>{
                              return {
                                        type:ActionNames.ATTACH_TO_DOMAINS,
                                        formId,
                                        domains
                              };
                    },
                    deleteFormId:formId=>{
                            return {
                                   type:ActionNames.DELETE_FORM_ID,
                                   formId
                            };
                    },
                    updateAttachedDomains:(oldFormId, newFormId,domains)=>{
                         return {
                              type:ActionNames.UPDATE_ATTACHED_DOMAINS,
                              oldFormId,
                              newFormId,
                              domains
                         };
                    },
                    deleteAllDomains:()=>{
                              return {
                                   type:ActionNames.DELETE_ALL
                              };
                    },
                    deleteADomain:domain=>{
                         return{
                              type: ActionNames.DELETE_A_DOMAIN,
                              domain
                         };
                    }
     }
}

export const saveDomains=({formData, store})=>{     
     const domains=generalUtil.buildDomainsFromFormData(formData);
     if(!domains){
          return;          
     }     
     store.dispatch(domainFormMappings.actions.attachToDomains(formData.id,domains));
};

export const updateDomains=({formData, formId, store})=>{     
     const domains=generalUtil.buildDomainsFromFormData(formData);

     if(!domains){
          store.dispatch(domainFormMappings.actions.deleteFormId(formId));    
          return;
     }     
     if(formId===formData.id || (!formId)){
          store.dispatch(domainFormMappings.actions.attachToDomains(formData.id,domains));
     }
     else{
          store.dispatch(domainFormMappings.actions.updateAttachedDomains(formId,formData.id,domains));
     }
     
};

export const deleteFormData = ({formData, store})=>{          
     deleteByFormId({formId:formData.id, store});
};
export const deleteByFormId = ({formId, store})=>{     
     store.dispatch(domainFormMappings.actions.deleteFormId(formId));
};

export const mergeFormData=({formData, store})=>{
     const domains=generalUtil.buildDomainsFromFormData(formData);
     if(domains){
          store.dispatch(domainFormMappings.actions.attachToDomains(formData.id,domains));
     }
};     
export const mergeFormDataList=({store,formDataList}) =>{
     formDataList.forEach(formData=>{
          mergeFormData({formData,store});
     });
}

export const deleteAll = ({store}) => {
     store.dispatch(domainFormMappings.actions.deleteAllDomains());
}


export const getAllDomainMappingRecords = store => store.getState().domainFormMappings.domainToIds;


