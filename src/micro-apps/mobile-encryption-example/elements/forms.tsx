import React, {useState} from 'react';
import {Field, TextArea, Input, Label} from './formElements';
import {Help} from './help';
import {CopyToClipboardButton} from './copyButton';

const ContentInput=({content, onContentChanged,expand,setExpand})=>(
  <Field>
                      <TextArea id="inputContent" onChange={evt=>{
                        onContentChanged(evt.target.value);
                      }} value={content} placeholder="Content Received from your mobile will be placed here."
                      onFocus={()=>setExpand('inputContent')}/>
                      <Label htmlFor="inputContent">Content</Label>
                      <Help expandId='inputContent' expand={expand} setExpand={setExpand}>
                      The encrypted content received from your mobile app will be displayed in this text box.
                      Since the key that has encrypted the content never leaves your mobile app and the encryption takes place inside your mobile app,
                      this application is not able to decrypt the content.
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
                      The label you would to use to identify the encrypted content.
                      The label will be placed the underneath the QR Code you are going to generate in the next step.
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
