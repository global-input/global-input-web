import React from 'react';
import TopHeaderSection from "../../../page-components/top-header-section";
import {styles} from "./styles";

import SendMessageExample from "../../../examples/send-message-example";
import {config} from "../../../configs";
import "whatwg-fetch";
export default class SendMessageScreen extends React.Component{
  apiURL="https://iterativesolution.co.uk/wp-json/contact-form-7/v1/contact-forms/283/feedback";

  render(){
    return(
      <React.Fragment>
        <TopHeaderSection selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <SendMessageExample {...this.props} url={config.url}/>
            </div>
        </div>
      </React.Fragment>

    );

  }
  sendMessage(data){
    var headers={
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    var searchParams = new URLSearchParams();
    searchParams.append("your-first-name", data.firstName);
    searchParams.append("your-last-name", data.lastName);
    searchParams.append("your-email", data.email);
    searchParams.append("your-phone", data.phone);
    searchParams.append("your-message", data.message);

    return fetch(this.apiURL,{headers, method:"POST", body:searchParams})
     .then(response => {
          if(!response){
                this.setMessage("Failed to send the message: server returned empty response");
          }
         return response.text();
     }).then(body => {
         return JSON.parse(body);
     });

  }

}
