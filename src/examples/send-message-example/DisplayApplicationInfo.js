import React, { useReducer, useState, useRef, useEffect } from "react";
import { PageContainer,Title, P,A} from './app-layout';
export default () => (
    
    <P>
This example application demonstrates how applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to take advantage of the <A href="https://globalinput.co.uk/global-input-app/mobile-personal-storage">Mobile Personal Storage</A> to implement a business logic that relies on user data,  but does not necessarily store them into databases.
A connected application can request data on-demand from the mobile app's encrypted storage, while the user can push it from the mobile app to the application per request.  

    When an application does need to store some of the user information into its database, it can use the <A href="https://globalinput.co.uk/global-input-app/mobile-content-encryption">Mobile Encryption</A> to secure them.
    This application's source code is available on <A href="https://github.com/global-input/send-message-example"> GitHub</A>.
</P>

  );
