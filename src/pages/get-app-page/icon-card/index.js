import React from 'react';
import {styles, images} from './styles';
import {Link} from 'react-router-dom';

import {withResponsiveComponent} from '../../../components/screen-media';

const IconHeaderCard=({titleIcon,title,content,link,children,footerContent})=>(
          <div style={styles.card.get()}>
              <div style={styles.icon.container}><img src={titleIcon} style={styles.icon.img}/></div>
              <div style={styles.title.get()}>{title}</div>
              <div style={styles.content.get()}>
                        {children}
              </div>
              <div style={styles.footer.container}>
                    <div style={styles.footer.content.get()}>            
                              {footerContent}            
                    </div>
               </div>
          </div>);



export default withResponsiveComponent(IconHeaderCard);



export const CardContainer=withResponsiveComponent(({children})=>(
     <div style={styles.cardContainer.get()}>
               {children}
     </div>
));
