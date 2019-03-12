import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';
import examples from '../examples';


export default class ClientSideOnlySolution extends React.Component{

  static menu={
        id:"clientdevice",
        label:"Client Side Only Solution",
        title:"Client Side Only Solution"
  }
  render(){
    return(
      <div style={styles.chapter.container.get()} id={ClientSideOnlySolution.menu.id}>
          <div style={styles.chapter.title}>
                {ClientSideOnlySolution.menu.title}
          </div>
          <div style={styles.chapter.content}>
                <div style={styles.chapter.paragraph}>
                Global Input App provides applications with a <b>client-side-only</b> solution that does not require any extra server-side implementation, no extra API to implement or call, not extra cloud storage, not extra subscriptions, and all business logics are implemented on the client side by including a <b>extension library</b>, passing JSON data and receiving even calls when the user press the button on the mobile.
              </div>
              <div style={styles.chapter.paragraph}>
                <b>For example</b>, if you would like to display a button on user’s mobile after user scans the encrypted QR code presented by your application, and you would like to call a <b>playMovie() function</b> when the user presses the button, you just need to provide the following:
              </div>
              {this.renderExampleCode1()}
                  <div style={styles.chapter.paragraph}>
                      And if you would like the user to <b>enter content</b> via his/her mobile and sent to your Smart TV app, you just need to provide the following:
                  </div>
                  {this.renderExampleCode2()}
                  <div style={styles.chapter.paragraph}>
                  <b>
                If you are interested, you can have a look at the examples in action, and check out their sources codes on the Github:
                  </b>
                  </div>
                  <div style={styles.chapter.paragraph}>
                    <ul>
                    {examples.allLinks.map(this.renderExampleLink)}
                    </ul>
                  </div>
          </div>



      </div>
    );
  }
  renderExampleLink(linkitem){
    return (<li style={styles.exampleItem}><Link to={linkitem.path}>{linkitem.linkText}</Link></li>)
  }
  renderExampleCode1(){

      return(
        <div style={styles.code.get()}>
        <pre>
{`     type:  "button",
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
