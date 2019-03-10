import React from 'react';
import {styles, images} from './styles';
import {Link} from 'react-router-dom';

export default class Card extends React.Component{
    render(){

        return(
          <div style={styles.card.get()}>
              <div style={styles.icon.container}><img src={this.props.titleIcon} style={styles.icon.img}/></div>
              <div style={styles.title.get()}>{this.props.title}</div>
              <div style={styles.content.get()}>
                        {this.props.content.map(this.renderLine.bind(this))}
              </div>
              <div style={styles.footer}>

                        <Link to={this.props.link}>
                        READ MORE <img src={images.arrow} style={styles.arrow}/>                        
                        </Link>

              </div>
          </div>);
    }
    renderLine(content, index){
            return(<div style={styles.line} key={index}>{content}</div>);
    }
}

Card.defaultProps={
      title:"",
      content:[]
}
