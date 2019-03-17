import React, {Component} from 'react';
import {styles} from "./styles";

import {withResponsiveComponent} from '../../components/screen-media';

import  './styles.css';
class FourItemsList extends React.Component {

    renderHeaderItems(item,index){
        return(
          <li key={index}>
            {item}
          </li>
        );
    }

render(){
      if(this.props.screenMedia && this.props.screenMedia.biggerThan(800)){
        return(
          <div style={styles.listContent.get()}>
              <ul className="listmenu" style={styles.itemRow.onerow.get()}>
                {this.props.items.map(this.renderHeaderItems.bind(this))}
              </ul>
          </div>
        );
      }
        else{
          return(
            <div style={styles.listContent.get()}>
              <ul className="listmenu" style={styles.itemRow.tworows}>
                <li>
                  {this.props.items[0]}
                </li>
                <li>
                  {this.props.items[1]}
                </li>
              </ul>

          <ul className="listmenu" style={styles.itemRow.tworows}>
            <li>
              {this.props.items[2]}
            </li>
            <li>
              {this.props.items[3]}
            </li>
          </ul>
          </div>
        );

        }
   }

}
const ResponsiveFourItemsList=withResponsiveComponent(FourItemsList);
export default ResponsiveFourItemsList;
