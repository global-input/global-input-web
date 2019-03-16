import React from 'react';


import {config} from '../../configs';



const chromeExtension=[{href:config.links.chromeExtension.url, linkText:"Install Chrome Extension"}];
const ChromeExtension=props=>{
        const {ListLinks}=props.theme;
        return(
            <ListLinks items={chromeExtension}/>
        );
};

const Websites=props=>{
    const {A}=props.theme;
      return(<A href={config.links.chromeExtension.websites}>here</A>);
}


const videoLinks=[{href:config.links.authenticationDemo.url, linkText:"Watch Demo Video"},{href:config.links.tutorialP1.url, linkText:"Watch Tutorial Video"}]
const VideoLinks=props=>{
    const {ListLinks}=props.theme;
    return(<ListLinks items={videoLinks}/>);
};
const DemoVideo=props=>{
    const {A}=props.theme;
    return(<A href={config.links.authenticationDemo.url}>demo video</A>);
};


const WordPressPlugin=props=>{
      const {A}=props.theme;
      return(<A href={config.links.wordpressPlugin.url}>Global Input App Wordpress Plugin</A>);
  };

const TransferForm=props=>{
      const {Link}=props.theme;
      return(<Link to={config.paths.examples.transferForm.path}>Transfer Form Data Application</Link>);
}
const SecondScreen=props=>{
  const {Link}=props.theme;
  return(<Link to={config.paths.examples.mediaPlayer.path}>Second Screen Control</Link>);
}

const WhitePaper=props=>{
  const {A}=props.theme;
  return(<A href={config.docs.security}>white paper</A>);
}

export default class MobileAuthenticationAndBeyon extends React.Component{





  render(){
        var theme=this.props.theme;
        const {P, Title, Code}=theme;

        return(

       <React.Fragment>
              <Title>Mobile Authentication & Beyond</Title>
              <P>
              Global Input App (GIA) provides applications with a straightforward solution for introducing mobile authentication without adding any extra server-side logic.
              The existing username and password based authentication can be extended to have mobile authentication just by including an extension library on the client-side,
              paving the way for a smooth transition to a more sophisticated authentication strategy iteratively, for example, to the Key Pair authentications (WebAuthn, SQRL etc.) that require some work on the server side.
              </P>
              <P>
              You can start using the Global Input App straight away by installing the Chrome Extension:
              </P>
              <P>
                <ChromeExtension theme={theme}/>
              </P>
              <P>
                 You may watch the following two videos on how to use the GIA app together with the Chrome Extension to turn your mobile as an
                 authentication device when you are signing in to websites.
              </P>
              <P>
                  <VideoLinks theme={theme}/>
              </P>
              <P>
                When you are visiting a website, you can activate the Chrome Extension by clicking on the GIA icon on the top of your browser, and follow the instructions there.

              </P>
              <P>
                The <b>Application Control Settings</b> on the Chrome extension window allows you to specify the IDs of the HTML elements on the current page
                 that you would like to interact with and transfer content or operate on them using your mobile.
                In this scenario, the Chrome Extension plays the role of the proxy between the application and GIA, allowing you to operate on the page
                directly using your mobile. The Applications Control Settings that comes with the extension can be found <Websites theme={theme}/>. You can add new settings or remove the existing ones
                for the website you are visiting.
              </P>
              <P>
                If the <b>Application Control Settings</b> is missing for a website, you cannot directly control the web page using your mobile, but you still can push
                 the selected data (filtered automatically using the domain of the website you are visiting) to the Chrome Extension, and then you can copy and paste the required content to
                 the web page being loaded on your browser. In this case, you can do bi-directional operations: you can type both on your computer and on your mobile to enter content,
                 the content will be synced live with each other. This is convenient if you would like to transfer some content from a computer to your mobile or vice versa.
                 Also, you can quickly customise the form displayed on the extension matching what is required by the website.
                 The customised form will also be displayed on your mobile, allowing your enter content or select and push the existing data to the form.
                This is very convenient if a website has a long form for you to fill in, and you would like to reuse some data stored in GIA's encrypted storage.
              </P>
              <P>
                A website can embed the GIA extension directly. In that case, there is no need for the Chrome extension for using GIA to operate on it.
                If you have a WordPress website, you can install the <WordPressPlugin theme={theme}/>, so that your website can work without the Chrome extension.
                When your website is displayed on a big screen, you can just scan the QR code and you can sign in straight away using the credential data stored in your mobile.
              </P>

              <P>
                When you are using a computer that does not have Global Input App Chrome Extension installed, and you are visiting a website,
                which does not have Global Input App extension embedded,  you can still use the  <TransferForm theme={theme}/> to transfer data to there and then copy and paste to wherever you like.
                Again, you can use both computer and your mobile to enter content and they will be synced on the fly.
                The application allows you to customise the form and then when the QR code is displayed, you can bookmark the URL to avoid rebuild the form again in the future when you need the same type of form to transfer data between a computer and your mobile.
              </P>
              <P>
                If you have a web application, you can easily integrate the GIA extension into your application, making the mobile authentication instantly.
                For example if you would like to present in GIA screen, a form that is comprised of "Username", "Password" and a "Login" button and receive events when users interacts with them,
                you just need to provide the following JSON data:
              </P>
              <Code>
                {`
                   fields:[{
                        label:"Username",
                        operations:{onInput:username=>this.setUsername(username)}
                    },{
                        label:"Password",
                        operations:{onInput:password=>this.setPassword(password)}
                    },{
                        label:"Login",
                        operations:{onInput:()=>this.login()}
                    }]

                `}

              </Code>
              <P>
                One of the distic featuure of the GIA solution is the mobile integration can go beyond than the authentication to have mobile input and mobile control working like a full mobile app without the need to develop the actual mobile app.
                You may be already realised that when you are watching the <DemoVideo theme={theme}/>. The same mechanism makes the <SecondScreen theme={theme}/> possible.
              </P>

              <P>
                  If you would like to know more about the GIA security strategy, you can read our <WhitePaper theme={theme}/>
              </P>

        </React.Fragment>

);
  }
}
