import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const UserDataProtection = props =>{

        const {P, Title,Title2, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Form Operations & Protecting User Data</Title>
              <P>
              In the light of current climate of frequent breach of customer data and the tightening up of the privacy policy to force the companies to take more responsibility to keep the user data safe, it might be worth to consider the option of not storing the user data when developing an application. In this context, an application may delegate the responsibility of storing and managing the user data to a trusted third-party service provider. In this approach, the application obtains an access token to access the user data from the service provider as part of the user login process.
              </P>
              <P>
              Global Input App provides a different approach that goes further by not storing user data at all anywhere in the cloud. In this approach, the users manage their own data in their own mobile devices. The user data is encrypted with some random and dynamic encryption keys that are, in turn, encrypted with user password. The data stays safe in the users’ own mobile device and decrypted only when it is needed. This gives the users complete control over their data and may give them some confidence over the security of their personal data.
              </P>
              <P>
              The Global Input App allows a user to inspect and push the selected data to an application when requested. At the end of a session, the user is presented with an option to save the data into the mobile app for future use if the data is modified during the session. This means that a user can carry around a central storage in a mobile device to store and manager his/her personal data for a wide range of applications.
              </P>
              <P>
              For example, a website can provide a contact form for its customers to leave a message. In order to identify the user and respond to the user’s message, the application requires the user to provide his/her personal data such as names, email address, telephone number etc. In order to allow the user to reuse the form data next time when he/she needs to leave a message again, the Global Input App presents the user with an option to save the form data for future use. The data can be pushed back to the application next time when the application needs it. You can try it out this approach in action or watch the introductory video
              </P>
              <P>
              The data stored in the mobile app can be any data. For example, it can be a set of parameters representing the user’s viewing habit in a media application. The parameters are re-calculated after each session and present the user with an option to save them back into the mobile app. The media application can request the data on-demand as part of the login process so that the user can push it from the mobile app to the application to enjoy the personalized user experience. This may make some users happy if they worried about safety of their viewing habit.
              </P>
              <P>
              The same approach is used to automate the subscription, sign in and any other operations in the applications running on the big screen devices. The application can request the necessary data using the end-to-end encrypted communication. The user can then inspect the selected data and then push it to the application. Please visit the Global Input App website for the more information on this.
              </P>
              <P>
              <Title2>See It in Action</Title2>
              Load the sample web application in a browser on your computer, and scan the QR Code with your Global Input App.
A form will be displayed on your mobile titled with “Our Contact Details”, you can now press the the “Save” button to save our details into your app. You can view/edit the data item you have saved on the “Data” tab.
If you can now scroll to the bottom of the form, and press the “Continue” button there, a new form for sending a message to us will be displayed. If you fill in your details and a message content, and then press the “Send Now”, a message will be sent to us. Now you need to save the form data you have just entered into your app. If you reload the page and go through the steps again, you will notice that a button named “Matched” is displayed on the bottom of your mobile screen. This means that at least one data item matching the form exists in your app. Press on it to see the list and select the row to display its details. The data details will be displayed with “*” characters. This means that the data is not decrypted yet. You can press “Show” button to decrypt and show its details or press the “Select” button to send the data item straight away to the form being displayed on your computer. Now you can just need to place a new message and press the “Send Now” button.
              </P>

              <P>
              <Title2>A Privacy Compliance Solution</Title2>
              Many applications needs to store user data into the application databases in order to provide personalised experience. This means the user data will be collected in the application databases. In this case, in order to comply with the privacy policy, application developers may have to spend quite significant amount of effort on protecting the user data and making sure that the user has given consent on collecting the personal data and how to use the user data etc.
Global Input App offers an alternative solution by removing the need to store the user data into the application database, instead it presents a form to the user, and the user can push data to fill the form by selecting the data in the app.
For example, a media application may need to personalise the user experience using the preference/user habits parameters that can be automatically adjusted in each session by following what programmes that the user has watched. This data be can be stored as part of the authentication data in the Global Input App with the choice of user, and the user may choose to send the data back to the application to get the personalized experience, thus eliminating the need for the application to store the user specific data on the server. This may simplify the development of the application and may be appealing to the users who may not like like the application provider to store his/her viewing habits into their databases.
              </P>
              <P>
              <Title2>Subscription on Smart TV</Title2>
              A Smart TV media application may require user to create an account before using it. Using the TV remote controller to sign in is already a time consuming task, let alone going through the entire subscription process. The Smart TV media application can be easily extended to have mobile input and mobile control functionality, so that a user can user his/her mobile to carry out “subscription”, “sign in”, search and browsing functionalities.
              </P>



  </FirstSection>


        </React.Fragment>

);

};
UserDataProtection.menu={
    id:"UserDataProtection",
    label:"User Data Protection"
}
export default UserDataProtection;
