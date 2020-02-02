import React from 'react';

import {styles} from './styles';

export const P=({children})=>(<div style={styles.paragraph.get()}>{children}</div>);
export const ErrorMessage= ({errorMessage})=>{
    if(errorMessage){
      return (<div style={styles.errorMessage.get()}>{errorMessage}</div>);
    }
    else {
      return null;
    }  
}
export const Title=({children})=>(<div style={styles.title.get()}>{children}</div>);

export const Code=({children})=>(
  <div style={styles.codeContainer}>
      <pre style={styles.code}>{children}</pre>
  </div>
);



export const A=({href,children})=>(<a href={href} style={styles.link} target="__blank">{children}</a>);

export const Concept=({children})=>(<span style={styles.concept}>{children}</span>);

export const ContentContainer=({children,row})=>{
  let st=styles.contentContainer.left;  
  if(row==='center'){
      st=styles.contentContainer.center;  
  }
  return(<div style={st.get()}>{children}</div>);
}

export const TextAreaBox = ({value, id, onChange})=>(
      <textarea  id={id} style={styles.textArea.get()}
      onChange={onChange} value={value}/>            
);
export const TextInputBox=({id,type,readOnly,onChange,value,label})=>{
  return(           
           <div style={styles.form.row}>             
              <label htmlFor={id} style={styles.form.label}>{label}</label>
             <input  id={id} style={styles.form.input}
             
            type={type}            
            readOnly={readOnly}            
            onChange={onChange} value={value}/>
            
          </div>
      
         
  );
}

export const TextButton=({onClick,label})=>(
  <button style={styles.textButton} onClick={onClick}>{label}</button>
);

export class ListLinks extends React.Component {

  render(){
    return(<ul>
          {this.props.items.map(this.renderItem.bind(this))}
        </ul>);
  }
  renderItem(item, index){    
      if(item.href){
              return(

                <li style={styles.item} key={index}>
                      <a href={item.href} style={styles.link} target="__blank">{item.linkText}</a>
                </li>
                );
        }
        else{
          return (<li style={styles.item} key={index}>
                Missing links
          </li>);
        }
  }
}


