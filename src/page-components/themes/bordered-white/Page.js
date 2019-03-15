import React from 'react';
import {Link} from 'react-router-dom';
import AdjustableComponent from '../../../components/adjustable-component';
import TopHeaderSection from '../../top-header-section';
import {styles} from './styles';


export default class Page extends AdjustableComponent{
  static defaultProps={
      scrollTo:'topContent'
  }
  constructor(props){
    super(props);
    this.onWindowResize=this.onWindowResize.bind(this);
  }
   componentDidMount() {
       window.addEventListener("resize", this.onWindowResize);
       this.processScrollTo(this.props.scrollTo);
   }
   componentWillUnmount() {
       window.removeEventListener("resize", this.onWindowResize);
   }
   onWindowResize(){
      this.forceUpdate();
   }

  render(){
        return(<div style={styles.container} id="topContent">
            <TopHeaderSection selected={this.props.selected}/>
            <div style={styles.content}>
                  <div style={styles.card.container.get()}>
                        {this.props.children}
                  </div>
            </div>
        </div>);
  }
  processScrollTo(elementId){
        var elmnt = document.getElementById(elementId);
        if(elmnt){
                window.scrollBy({top: -70,behavior: "smooth"});
                elmnt.scrollIntoView();

        }

  }
}

export const Paragraph=props=>(<div style={styles.card.paragraph.get()}>{props.children}</div>);
export const Title=props=>(<div style={styles.card.title.get()}>{props.children}</div>);



export class ListLinks extends React.Component {

  render(){
    return(<ul>
          {this.props.items.map(this.renderItem.bind(this))}
        </ul>);
  }
  renderItem(item, index){
    return (
            <li style={styles.card.item} key={index}>
                  <Link to={item.path} style={styles.card.link}>{item.linkText}</Link>
            </li>
           );
  }
}

export const TextLink=props=>(<Link to={props.to} style={styles.card.link}>{props.children}</Link>);
export const ALink=props=>(<a href={props.href} style={styles.card.link}>{props.children}</a>);
