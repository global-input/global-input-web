import React from 'react';
import {Link} from 'react-router-dom';

import {withResponsiveComponent} from '../../../components/screen-media';
import TopHeaderSection from '../../top-header-section';
import {styles} from './styles';
import {config} from '../../../configs';
import PageFooter from '../page-footer';

const Page=props=>(<div style={styles.container} id="topContent">
            <TopHeaderSection selected={props.selected}/>
            <div style={styles.content}>
                        {props.children}

            </div>
            <PageFooter/>
        </div>);
const ResponsivePage=withResponsiveComponent(Page,{scrollTo:"topContent"});



const Paragraph=props=>(<div style={styles.card.paragraph.get()}>{props.children}</div>);
const Title=props=>(<div style={styles.card.title.get()}>{props.children}</div>);


const CodeContent=props=>(
  <div style={styles.card.codeContainer}>
      <pre style={styles.card.code}>{props.children}</pre>
  </div>
);





class ListLinks extends React.Component {

  render(){
    return(<ul>
          {this.props.items.map(this.renderItem.bind(this))}
        </ul>);
  }
  renderItem(item, index){
    if(item.path){
      return (
              <li style={styles.card.item} key={index}>
                    <Link to={item.path} style={styles.card.link}>{item.linkText}</Link>
              </li>
             );
      }
      else if(item.href){
              return(

                <li style={styles.card.item} key={index}>
                      <a href={item.href} style={styles.card.link} target="__blank">{item.linkText}</a>
                </li>
                );
        }
        else{
          return (<li style={styles.card.item} key={index}>
                Missing links
          </li>);
        }
  }
}

const TextLink=props=>(<Link to={props.to} style={styles.card.link}>{props.children}</Link>);
const ALink=props=>(<a href={props.href} style={styles.card.link} target="__blank">{props.children}</a>);

const Concept=props=>(<span style={styles.card.concept}>{props.children}</span>);

const _FirstSection=props=>(
          <div style={styles.firstSection}>
              <div style={styles.card.container.get()}>
                {props.children}
              </div>
          </div>
        );
 const FirstSection=withResponsiveComponent(_FirstSection);


const _NextSection=props=>(
          <div style={styles.nextSection}>
            <div style={styles.card.container.get()}>
              {props.children}
            </div>
          </div>
        );
const NextSection=withResponsiveComponent(_NextSection);


export default {Page:ResponsivePage,
                  P:Paragraph,
                  Title,
                  ListLinks,
                  Link:TextLink,
                  A:ALink,
                  Code:CodeContent,
                  Concept, FirstSection,NextSection};

