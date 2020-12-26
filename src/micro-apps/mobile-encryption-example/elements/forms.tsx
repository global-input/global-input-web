import React, {useState} from 'react';
import {Field, TextArea, Input, Label} from './formElements';
import {Help} from './help';
import {CopyToClipboardButton} from './copyButton';

const ContentInput=({content, onContentChanged,expand,setExpand})=>(
  <Field>
                      <TextArea id="inputContent" onChange={evt=>{
                        onContentChanged(evt.target.value);
                      }} value={content} placeholder="Content Received from your mobile will be displayed here."
                      onFocus={()=>setExpand('inputContent')}/>
                      <Label htmlFor="inputContent">Content</Label>
                      <Help expandId='inputContent' expand={expand} setExpand={setExpand}>
                      The encrypted content received from your mobile app will be displayed in the text box above. Note that only
                      your mobile app can decrypt the data. This application uses the encrypted data received to create an encrypted QR code in the next step.
                      </Help>

  </Field>
);


const LabelInput=({label, onLabelChanged,expand,setExpand})=>(
  <Field>
                      <Input id="inputLabel" onChange={evt=>{
                        onLabelChanged(evt.target.value);
                      }} value={label} placeholder="Label for the content above."
                      onFocus={()=>setExpand('inputLabel')}/>
                      <Label htmlFor="inputLabel">Label</Label>
                      <Help expandId='inputLabel' expand={expand} setExpand={setExpand}>
                      This will be placed above the QR Code as a label to help you identify it.
                      This is especially useful when printing the encrypted QR codes for filing purposes.
                      </Help>

  </Field>
);

export const ContentLabelForm=({content,onContentChanged,label, onLabelChanged})=>{
  const [expand,setExpand]=useState('');
  return  (
  <>
  <ContentInput content={content} onContentChanged={onContentChanged} expand={expand} setExpand={setExpand}/>
  <LabelInput label={label} onLabelChanged={onLabelChanged} expand={expand} setExpand={setExpand}/>
  </>
  );
};


const ContentToEncrypt=({content, onContentChanged,expand,setExpand})=>(
  <Field>
                      <TextArea id="contentToEncrypt" onChange={evt=>{
                        onContentChanged(evt.target.value);
                      }} value={content} placeholder="Place here the content you would like to encrypt."
                      onFocus={()=>setExpand('contentToEncrypt')}/>
                      <Label htmlFor="contentToEncrypt">Content to Encrypt</Label>
                      <Help expandId='contentToEncrypt' expand={expand} setExpand={setExpand}>
                      This content will be sent to your mobile app for encryption. Your mobile app then sends the encrypted
                      content back to this application.
                      </Help>

  </Field>
);




export const ContentEncryptionForm=({content,onContentChanged})=>{
  const [expand,setExpand]=useState('');
  return  (
  <ContentToEncrypt content={content} onContentChanged={onContentChanged} expand={expand} setExpand={setExpand}/>
  );
};


const ContentToCopy=({content})=>(
  <Field>
                      <TextArea id="contentToEncrypt"  value={content} placeholder=""
                      onFocus={()=>()=>{}} readOnly={true}/>
                      <Label htmlFor="contentToCopy">Content to Copy</Label>
                      <CopyToClipboardButton value={content}>Copy</CopyToClipboardButton>
  </Field>
);


export const CopyContentForm=({content})=>{

  return (
  <ContentToCopy content={content}/>);

}
