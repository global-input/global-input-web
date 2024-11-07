import React, { useState, useEffect } from 'react';
import {
  Text,  
  View,
  Image,  
} from 'react-native';
import {styles} from "./styles";
import {formDataUtil} from "../../store";
import {images,menusConfig} from "../../configs";
import renderFormFields from './renderFormFields';
import {ViewWithTabMenu, DisplayBlockText} from "../../components";


const FormLabel = ({formData}) => {
    if(formData.label){
      return(
      <View style={styles.formEditField}>
            <Image source={images.folder} style={styles.labelIcon}/>
            <View style={styles.itemRecord}>
                <Text style={styles.valueText}>{formData.label}</Text>
            </View>
        </View>
      );
    }
    else{
      return null;
    }
  };

export default ({formData,menuItems,title,content1,content2})=>{
    const [action,setAction]=useState({show:false,modal:null});
    useEffect(()=>{
        setAction({show:false, modal:null})
    },[formData]);

    const onShow = () => setAction({...action,show:true});
    const onHide = () => setAction({...action,show:false});
            
    const appmenus = action.show?[{menu:menusConfig.hideSecret.menu,onPress:onHide}]:[{menu:menusConfig.showSecret.menu,onPress:onShow}];      
    
    var formid="";
    if(formData && formData.id){
        formid=formDataUtil.getFormIdFromTemplateAndFields(formData.id,formData.fields);
    }
      return(
        <ViewWithTabMenu menuItems={[...menuItems, ...appmenus]}
          title={title}>
             <View style={styles.content}>

                  <DisplayBlockText content={content1}/>
                  <View style={styles.formEditField}>
                                <Image source={images.idIcon} style={styles.labelIcon}/>
                                <View style={styles.itemRecord}>
                                    <Text style={styles.valueText}>{formid}</Text>
                                </View>
                    </View>
                    <FormLabel formData={formData}/>                    
                    {renderFormFields({action, formData})}
            </View>
            <View style={styles.content}>
                    <DisplayBlockText content={content2}/>
            </View>
      </ViewWithTabMenu>

  );


};

