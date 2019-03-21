import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';

import BorderedWhite from '../../page-components/themes/bordered-white';

import {examplesLinks} from '../../links-components';

const {ListAllExamples}=examplesLinks;


export default class ClientSideOnlySolution extends React.Component{

  static menu={
        id:"clientdevice",
        label:"Client Side Only Solution",
        title:"Client Side Only Solution"
  }
  render(){
    const {P, Title, Code,Concept, FirstSection,NextSection}=this.props.theme;
    return(
      <React.Fragment>

            <FirstSection>
                  <Title>{ClientSideOnlySolution.menu.title}</Title>

            </FirstSection>







    </React.Fragment>
    );
  }
  renderExampleLink(linkitem){
    return (<li style={styles.exampleItem}><Link to={linkitem.path}>{linkitem.linkText}</Link></li>)
  }
  renderExampleCode1(){

      return(
        <div style={styles.code.get()}>
        <pre>
{`
  type:  "button",
  label: "Play",
  onInput:value => playMovie()
`}
            </pre>
       </div>
      );
  }
  renderExampleCode2(){

    return(
    <div style={styles.code.get()}>
          <pre>
{`
   type:  "text",
   label: "Search",
   onInput:value => searchContent(value)
`}
          </pre>
    </div>
    );
  }

}
