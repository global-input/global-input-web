const contactUsConfig={
  title:"Contact us",
  appTitle:"Global Input App",
  appSubtitle:"Contact Us",
  menu:{
    link:"/global-input-app/contact-us",
    linkText:"Contact Us"
  },
  advert:{
      duration:5000,
      items:[{
        title:"Use Mobile to Operate on Business Applications",
        content:["Easy to Enable Applications to Support the Global Input App",
                "Data Stored in the App to Automate the Processes in the Business Applications"],
        className:"animateAppearFromSmallToBig"
      }]
  },
  pageContent:{
          address:{
              title:"Address",
              content:["Iterative Solution Limited",
                      "10 Greycoat",
                      "London",
                       "SW1P 1SB"]
          },
          phone:{
              title:"Phone",
              content:"020 3290 6278"
          },
          email:{
              title:"Email",
              content:"info@iterativesolution.co.uk"
          }
  },
  introduction:{
    content:["Alternatively, you may use the Global Input App to operate on this page to send information to us.",
                      "Click the following button to start"],
     startButton:"Start"
  },
  connecting:{
        title:"Contact Data Transfer",
        content:"Connecting..."
      },
      connected:{
          title:"Contact Data Transfer",
          content:"Scan the QR Code below with the Global Input App on your mobile",
          backButton:"Back"
      },
      senderConnected:{
          cancelButton:"Cancel",
          nextButton:"Send Message to us",

      },
  contactForm:{
      id:"###company_name###@contacts",
      title:"Our Contact Details",
      label:"contacts",
      companyname:{
                    id:"company_name",
                    type:"text",
                    nLines:1,
                    label:"Company Name",
                    value:"Iterative Solution",
                    fieldIndex:0
                  },

      address:{
                  id:"address",
                  type:"text",
                  nLines:5,
                  label:"Address",
                  value:"Iterative Solution Limited \n 10 Greycoat \n London SW1P 1SB",
                  fieldIndex:1
              },
      phone:{
                          id:"phone",
                          type:"text",
                          nLines:1,
                          label:"Phone",
                          value:"020 3290 6278",
                          fieldIndex:2
       },
       email:{
                           id:"email",
                           type:"text",
                           nLines:1,
                           label:"Email",
                           value:"info@iterativesolution.co.uk",
                           fieldIndex:3
        },
        info:{
              type:"info",
              value:["Please press the \"Save\" button to save our contact info, and then press the \"Continue\" button below to send a message to us"],
              index:4
        },
        nextButton:{
                          label:"Continue",
                          type:"button",
                          fieldIndex:5
        },
        cancelButton:{
                          label:"Cancel",
                          type:"button",
                          fieldIndex:6
        }

    },
    messageForm:{
        id:"iterativesolution@mymessages",
        title:"Sending Messages",
        label:"My Messages",
        first_name:{
                      id:"first_name",
                      type:"text",
                      nLines:1,
                      label:"First Name",
                      value:"",
                      fieldIndex:0
                    },

        last_name:{
                    id:"last_name",
                    type:"text",
                    nLines:1,
                    label:"Last Name",
                    value:"",
                    fieldIndex:1
                },
        email:{
                            id:"email",
                            type:"text",
                            nLines:1,
                            label:"Email",
                            value:"",
                            fieldIndex:2
         },
         phone:{
                             id:"phone",
                             type:"text",
                             nLines:1,
                             label:"Phone",
                             value:"",
                             fieldIndex:3
          },
          message:{
                              id:"message",
                              type:"text",
                              nLines:5,
                              label:"Your Message",
                              value:"",
                              fieldIndex:4
           },
          sendButton:{
                            label:"Send Now",
                            type:"button",
                            fieldIndex:5
          },
          cancelButton:{
                            label:"Cancel",
                            type:"button",
                            fieldIndex:6
          }

      },
      api:{
          url:"https://iterativesolution.co.uk/wp-json/contact-form-7/v1/contact-forms/283/feedback"
      },
      sendingMessage:{
            title:"Sending",
            content:"Sending the message"
          },
      messageSent:{
                title:"Message Sent",
                content:"Message is sent successfully"
              },

};
export default contactUsConfig;
