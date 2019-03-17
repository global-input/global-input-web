
import React from 'react';

import {styles,images} from './styles';

import {withResponsiveComponent} from '../../components/screen-media';
const textContent={
    title:"Join Us!",
    community:{
        gitter:"https://gitter.im/globalinput/globalinputapp",
        whatsapp:"https://chat.whatsapp.com/DTYPz6fY7atGjwLk3TQp7e"
    },
    address:{
      title:"Address:",
      content:["Iterative Solution Limited",
                "Kemp House",
                "152 - 160 City Road",
                "London",
                "EC1V 2NX"]
    },
    phone:{
      title:"Phone:",
      content:"+44 (0) 20 3290 6278"
    },
    email:{
      title:"Email:",
      content:"info@iterativesolution.co.uk"
    }
}

class FooterSection extends React.Component {

    render(){
      return(<div style={styles.container}>
          <div id="contactUs"></div>
          <div style={styles.titleContainer}>{textContent.title}</div>
          <div style={styles.iConsContainer}>
                  <a href={textContent.community.whatsapp} target="_blank" style={styles.icon}>
                      <img  src={images.whatsapp}/>
                  </a>
                  <a href={textContent.community.gitter} target="_blank" style={styles.icon}>
                      <img  src={images.gitter}/>
                  </a>

          </div>
          <div style={styles.contactContainer.get()}>
                <div style={styles.contact.container}>
                      <div style={styles.contact.title}>{textContent.address.title}</div>
                      {textContent.address.content.map(this.readItems.bind(this))}
                </div>
                <div style={styles.contact.container}>
                      <div style={styles.contact.container}>
                          <div style={styles.contact.container}>
                              <div style={styles.contact.title}>{textContent.phone.title}</div>
                              <div style={styles.contact.item}>{textContent.phone.content}</div>
                          </div>

                      </div>
                      <div style={styles.contact.container}>
                        <div style={styles.contact.container}>
                            <div style={styles.contact.title}>{textContent.email.title}</div>
                            <div style={styles.contact.item}>{textContent.email.content}</div>
                        </div>
                      </div>


                </div>

          </div>

        </div>);
    }
    readItems(content,index){
        return (<div style={styles.contact.item} key={index}>{content}</div>);
    }
}

const ResponsiveFooterSection=withResponsiveComponent(FooterSection);

export default ResponsiveFooterSection;
