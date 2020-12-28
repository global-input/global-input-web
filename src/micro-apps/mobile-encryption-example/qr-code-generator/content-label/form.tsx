import React from 'react';

import {Field,TextArea,Label,Help, Input} from '../../elements';

export const CONTENT_ID='inputContent';
export const LABEL_ID='inputLabel';

export const ContentInput=({content, onContentChanged,expand,setExpand})=>(
    <Field>
                        <TextArea id={CONTENT_ID} onChange={evt=>{
                          onContentChanged(evt.target.value);
                        }} value={content} placeholder="Content Received from your mobile will be displayed here."
                        onFocus={()=>setExpand(CONTENT_ID)}/>
                        <Label htmlFor={CONTENT_ID}>Content</Label>
                        <Help expandId={CONTENT_ID} expand={expand} setExpand={setExpand}>
                        The encrypted content received from your mobile app will be displayed in the text box above. Note that only
                        your mobile app can decrypt the data. This application uses the encrypted data received to create an encrypted QR code in the next step.
                        </Help>

    </Field>
  );

  export const LabelInput=({label, onLabelChanged,expand,setExpand})=>(
    <Field>
                        <Input id={LABEL_ID} onChange={evt=>{
                          onLabelChanged(evt.target.value);
                        }} value={label} placeholder="Label for the content above."
                        onFocus={()=>setExpand(LABEL_ID)}/>
                        <Label htmlFor={LABEL_ID}>Label</Label>
                        <Help expandId={LABEL_ID} expand={expand} setExpand={setExpand}>
                        This will be placed above the QR Code as a label to help you identify it.
                        This is especially useful when printing the encrypted QR codes for filing purposes.
                        </Help>

    </Field>
  );
