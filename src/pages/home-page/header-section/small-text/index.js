import React, {Component} from 'react';
import {styles} from "./styles";

import {withResponsiveComponent} from '../../../../components/screen-media';


export const _SmallText = ({content,screenMedia})=> {
      if(screenMedia && screenMedia.biggerThan(800)){
        return(
          <div style={styles.listContent.get()}>
              <div style={styles.itemRow.onerow.get()}>
                    {content}
              </div>
          </div>
        );
      }
        else{
          return(
            <div style={styles.listContent.get()}>
              <div style={styles.itemRow.tworows}>
                  {content}
              </div>
          </div>
        );

        }
   }


export default withResponsiveComponent(_SmallText);

