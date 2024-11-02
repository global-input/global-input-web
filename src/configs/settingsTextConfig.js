const settingsTextConfig={
    serviceData:{
          title:"Settings Data",
          content:["Here you can export the global input settings of the app.",
                   "The exported data will include the URL of the Websocket Server, API key value required for connecting to the WebSocket Server and the Security Group key value that is set in the app.",
                    "Press the 'Continue' button to send the settings data to the connected application."],
          importSettings:{
                title:"Import Settings",
                content:["The QR Code has provded the following settings data:"],
                content2:["Press the \"Import\" button if would like to overwrite your existing settings with those provided by the QR Code."]
          },
          settingsImported:{
              title:"Settings Imported",
              content:["Import Successful"]

          },
          settingsIdentical:{
              title:"Settings Import",
              content:["The settings provided by the QR Code are identical to those in the App."],
          }
    },
    title:"Settings",
    timeOutLogin:{
          title:"Logged In Timeout",
          content:"The number of seconds that the app needs to wait before logging out when it is switched to the background.",
          placeholder:"Timeout value for Staying Logged in"
    },
    preserveSession:{
        title:"Preserve Session",
        content:"A boolean value specifying whether data transfer session should be kept alive when the app is switched to the background. Note that preserving session will consume more battary power.",
        label:"Preserve Session"
    },
    datatransfer:{
          title:"Data Transfer Settings",
          content:"Global Input App uses a WebSocket server when transferring data between devices using end-to-end encryption. The field below specifies the URL of the WebSocket server.",
          placeholder:"URL of the WebSocket server",
          securityGroup:{
              content:"In some cases, some applications may require the WebSocket server to authenticate and filter the incoming messages before passing them over to the application. The Security Group key value is used for authenticating the incoming messages on the WebSocket server side for the client application. The Security Group key value should be pre-shared with the Global Input App unless the application is including the Security Group key value as well in the QR code.",
              placeholder:"Security Group Key",

          },
          contentApiKey:"The API key value required for connecting to the WebSocket server:",
          apiplaceholder:"API Key",
          securityGroupPlaceHolder:"Security Group Key",
          codeAESPlaceHolder:"Code Key",
          qrcode:{
              title:"The Settings Exported",
              help:"Scan with your Global Input App:",
              help2:"This QR Code contains the WebSocket URL, API Key, and the Security Group Key."
          }
    },
    deleteAllData:{
        title:"Deleting All Data!!!",
        content:"Are you sure you would like to delete all your data stored in your Global Input App?"
    }

};
export default settingsTextConfig;
