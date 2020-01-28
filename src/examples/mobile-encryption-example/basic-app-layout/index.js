import React from 'react';
import {Link} from 'react-router-dom';
import {styles} from './styles';

export const P=({children})=>(<div style={styles.paragraph.get()}>{children}</div>);
export const Title=({children})=>(<div style={styles.title.get()}>{children}</div>);

export const Code=({children})=>(
  <div style={styles.codeContainer}>
      <pre style={styles.code}>{children}</pre>
  </div>
);


export const ALink=({children,to})=>(<Link to={to} style={styles.link}>{children}</Link>);
export const A=({href,children})=>(<a href={href} style={styles.link} target="__blank">{children}</a>);

export const Concept=({children})=>(<span style={styles.concept}>{children}</span>);

export const CenterContainer=({children})=><div style={styles.centerContainer}>{children}</div>

export const TextAreaBox = ({value, id, onChange})=>(
      <textarea  id={id} style={styles.textArea.get()}
      onChange={onChange} value={value}/>            
);

export class ListLinks extends React.Component {

  render(){
    return(<ul>
          {this.props.items.map(this.renderItem.bind(this))}
        </ul>);
  }
  renderItem(item, index){
    if(item.path){
      return (
              <li style={styles.item} key={index}>
                    <Link to={item.path} style={styles.link}>{item.linkText}</Link>
              </li>
             );
      }
      else if(item.href){
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


