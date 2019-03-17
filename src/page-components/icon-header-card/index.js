import React from 'react';
import {styles, images} from './styles';
import {Link} from 'react-router-dom';

import {withResponsiveComponent} from '../../components/screen-media';

const IconHeaderCard=props=>(
          <div style={styles.card.get()}>
              <div style={styles.icon.container}><img src={props.titleIcon} style={styles.icon.img}/></div>
              <div style={styles.title.get()}>{props.title}</div>
              <div style={styles.content.get()}>
                        {props.content.map((line,index)=>(<div style={styles.line} key={index}>{line}</div>))}
              </div>
              <div style={styles.footer}>

                        <Link to={props.link}>
                        READ MORE <img src={images.arrow} style={styles.arrow}/>
                        </Link>

              </div>
          </div>);


const ResponsiveIconHeaderCard=withResponsiveComponent(IconHeaderCard);

export default ResponsiveIconHeaderCard;
