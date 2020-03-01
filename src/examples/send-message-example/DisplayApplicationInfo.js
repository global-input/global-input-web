import React, { useReducer, useState, useRef, useEffect } from "react";
import { PageContainer,Title, P,A} from './app-layout';
export default () => (
    <P>
This example application demonstrates how web applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to take advantage of the <A href="https://globalinput.co.uk/global-input-app/mobile-personal-storage">Mobile Personal Storage</A> to implement business logic that relies on user data without actually storing them into their databases.
This is achieved by allowing allowing applications to request store data into mobile app's encrypted storage on the user's mobile device.  
This leads to a secure and const effective way of achieving GDPR compliance. The application's source code is available on <A href="https://github.com/global-input/send-message-example"> GitHub</A>.   
</P>

  );
