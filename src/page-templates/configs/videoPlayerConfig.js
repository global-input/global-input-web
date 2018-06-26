const PLAY_PAUSE_BUTTON_STATUS={
    CAN_PLAY:0,
    CAN_PAUSE:1
}

const videoPlayerConfig={
    PLAY_PAUSE_BUTTON_STATUS,
    title:"Integration with Media Applications",
    appSubtitle:"Media Applications",

    menu:{
        link:"/global-input-app/video-player",
        linkText:"Video Player",
        backLink:"/?scrollTo=videoPlayer",
        bookmark:"videoPlayer"
    },
    content:[
    "Global Input App provides a unique solution for media applications in implementing mobile input, mobile control and second screen eperience functions.",
    {type:"line", content:["Media applications can use the ",{
      type:"a", content:"the global-input-message", href:"https://github.com/global-input/global-input-message"
    }," JavaScript library to implement the secure mobile operations in a add-on manner without affecting the existing logic and architecture. ",
    "Application can ask the user to the user to store user data securely in user's own device without involving user privacy. The user has complete control over his/her data when the application needs the user data to create personalized media experience.",]},
    "Here an example is provided to show how to declaratively define a set of UI elements to control a media player via a mobile."],

    advert:{
            duration:8000,
            items:[{
              title:"A Unique Mobile Solution for Media Applications",
              content:["Mobile Input & Mobile Control",
                      "Second Screen User Experience"]
            },{
              title:"A Single Mobile App Solution for Multiple Media Applications",
              content:["User Subscription, User Sign In via Mobile Device",
                      "Mobile Input, Mobile Control & Second Screen User Experience"]
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
      content:"Scan the QR Code below with your Global Input App"
    },
    senderConnected:{
        title:"Video Player",
        content:"You can use your Global Input App to Control the video player."
    },

    startButton:"Start the Demo",
    cancelButton:"Back",
    finishButton:"Back"
}
export default videoPlayerConfig;
