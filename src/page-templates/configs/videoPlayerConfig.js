const PLAY_PAUSE_BUTTON_STATUS={
    CAN_PLAY:0,
    CAN_PAUSE:1
}

const videoPlayerConfig={
    PLAY_PAUSE_BUTTON_STATUS,
    title:"Controller Device and the Second Screen",

    menu:{
        link:"/global-input-app/video-player",
        linkText:"Video Player",
        backLink:"/?scrollTo=videoPlayer",
        bookmark:"videoPlayer"
    },
    content:["Universal Device Controller App",
    "Enable applications running on Computers, Smart TV, set-top boxes and IoT devices. Scan the QR code displayed to control the applications or use the mobile as the second screen. All the Business Logic is implemented within the applications and the applications only needs to define the UI to be displayed on mobile and the callback interface. The data transfer between the devices uses the end-to-end encryption.",
    "Here is an example for using the Global Input App to control a video player.",
    "Click the button below to start"],

    advert:{
            duration:10000,
            items:[{
              title:"Universal Input App for Applications",
              content:["Allows Users to Use Mobile to Control Service Applications without Doing Mobile Development",
                      "Defines Mobile UI Interface Elements Declatively and the Callbacks to Support the Globabl Input App"],
              className: "animateLeftRight"
            },{
              title:"Allow Users to Use the Mobile as Remote Control",
              content:["Defines Buttons and the Callbacks to Allow Users to Have Remote Control on the Mobile",
                      "Single App for All Applications with Encrypted Data Storage and Encrypted Data Transfer"],
              className: "animateAppearFromSmallToBig"
            },{
              title:"Integrated Desktop and Mobile Application Developments",
              content:["Mobile Control for Applications Running on Smart TV, Desktip, IoT, and Web Applications.",
                      "Scan to Operate, Secure Communications, Support the Automations."],
              className: "animateWithRotate"
            }]

    },
    form:{
        title:"Video Player",
        videoTitle:{
            type: "info",
            id:"videoTitle",
            value:{
                type:"text",
                content:"Big Buck Bunny",
                style:{
                    fontSize:26,
                    marginTop:50,

                }
            },
        },
        playStatus:{
            type:"info",
            id:"playerStatus",
            value:{
                      type:"view",
                      style:{
                        borderColor:"#rgba(72,128,237,0.5)",
                        borderWidth:1,
                        minWidth:150,
                        minHeight:150,
                      },
                      content:[{
                          type:"text",
                          content:"",
                          style:{
                              fontSize:20
                          }
                        },{
                            type:"text",
                            content:"",
                            style:{
                                fontSize:14
                            }
                          }]

            }

        },
        currentTimeSlider:{
            type:"range",
            id:"currentTime",
            min:0,
            max:100,
            value:0,
            step:1
        },
        playButton:{
            label:"Play",
            type:"button",
            icon:"play",
            groupId:"footer",
            value:0,
            id:"playPauseButton",
            options:[{value:PLAY_PAUSE_BUTTON_STATUS.CAN_PLAY,label:"Play",icon:"play"},{value:PLAY_PAUSE_BUTTON_STATUS.CAN_PAUSE,label:"Pause",icon:"pause"}]
        },
        skipToBeginButton:{
            label:"Begin",
            type:"button",
            icon:"skip-to-begin",
            groupId:"footer",
            id:"skipToBeginButton",
        },
        skipToEndButton:{
            label:"End",
            type:"button",
            icon:"skip-to-end",
            groupId:"footer",
            id:"skipToEndButton",
        },
        ffButton:{
            label:"FF",
            type:"button",
            icon:"ff",
            groupId:"footer",
            id:"ffButton",
        },
        rwButton:{
            label:"RW",
            type:"button",
            icon:"rw",
            groupId:"footer",
            id:"rwButton",
        },
        backButton:{
          label:"Back",
          type:"button",
          icon:"back",
          groupId:"footer2",
          buttonText:"Back"
        }
    },

    connecting:{
        title:"Video Player",
        content:"Loading..."
    },
    connected:{
      title:"Video Player",
      content:"Scan the QR Code below with the Global Input App on your mobile"
    },
    senderConnected:{
        title:"Video Player",
        content:"Please use the player controller displayed in the Global Input App to Control the video"
    },

    startButton:"Start",
    cancelButton:"Back",
    finishButton:"Back"
}
export default videoPlayerConfig;
