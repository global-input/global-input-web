const PLAY_PAUSE_BUTTON_STATUS={
    CAN_PLAY:0,
    CAN_PAUSE:1
}

const videoPlayerConfig={
    PLAY_PAUSE_BUTTON_STATUS,
    title:"Video Player Control Example",

    menu:{
        link:"/global-input-app/video-player",
        linkText:"Video Player",
        backLink:"/?scrollTo=videoPlayer",
        bookmark:"videoPlayer"
    },
    content:[
    "An example of using the Global Input App to control a video player. It can be extended to a much more complicated application including a second screen experience application.",
    "This demonstrate all the business logic is implemented within the applications and the applications only needs to define the UI to be displayed on mobile and the callback interface. The data transfer between the devices uses the end-to-end encryption.",
    {type:"line", content:["This demonstrate how to use ",{
      type:"a", content:"the global-input-message", href:"https://github.com/global-input/global-input-message"
    }, " WebSocket JavaScript library  to implement business logic within the media application itself and declatively specify the UI elements for Global Input App to interact with the media application using the end-to-end encryption."]}],

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
                    fontSize:18,
                    marginTop:20,

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
                        marginTop:5,
                        minWidth:80,
                        minHeight:80,
                      },
                      content:[{
                          type:"text",
                          content:"",
                          style:{
                              fontSize:14
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
        ffButton:{
            label:"FF",
            type:"button",
            icon:"ff",
            viewId:"row1",
            id:"ffButton",
        },
        playButton:{
            label:"Play",
            type:"button",
            icon:"play",
            viewId:"row1",
            value:0,
            id:"playPauseButton",
            options:[{value:PLAY_PAUSE_BUTTON_STATUS.CAN_PLAY,label:"Play",icon:"play"},{value:PLAY_PAUSE_BUTTON_STATUS.CAN_PAUSE,label:"Pause",icon:"pause"}]
        },
        rwButton:{
            label:"RW",
            type:"button",
            icon:"rw",
            viewId:"row1",
            id:"rwButton",
        },
        skipToBeginButton:{
            label:"Begin",
            type:"button",
            icon:"skip-to-begin",
            viewId:"row2",
            id:"skipToBeginButton",
        },
        skipToEndButton:{
            label:"End",
            type:"button",
            icon:"skip-to-end",
            viewId:"row2",
            id:"skipToEndButton",
        },



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
