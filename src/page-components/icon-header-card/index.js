import React from 'react';
import {styles, images} from './styles';
import {Link} from 'react-router-dom';

import {withResponsiveComponent} from '../../components/screen-media';

const renderFooter=(link, footerContent)=>{    
    if(link){       
        return(<div style={styles.footer.text}>
                <Link to={link}>
                    MORE <img src={images.arrow} style={styles.arrow}/>
                </Link>
            </div>)
    }
    else if(footerContent){
        return(
        <div style={styles.footer.buttons}>            
                    {footerContent}            
        </div>)        
    }
    else{
        return null;
    }
    
};
const renderContent=(content,children)=>{
    if(content){       
        return content.map((line,index)=>(<div style={styles.line} key={index}>{line}</div>));
    }
    if(children){
        return children;        
    }
};

const IconHeaderCard=({titleIcon,title,content,link,children,footerContent})=>(
          <div style={styles.card.get()}>
              <div style={styles.icon.container}>
                  <img src={titleIcon} style={styles.icon.img}/></div>
              <div style={styles.title.get()}>{title}</div>
              <div style={styles.content.get()}>
                        {renderContent(content,children)}
              </div>
              {renderFooter(link,footerContent)}              
          </div>);


export default withResponsiveComponent(IconHeaderCard);
