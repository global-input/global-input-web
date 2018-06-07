const START_PAUSE_BUTTON_STATUS={
    CAN_START:0,
    CAN_PAUSE:1
}

const gameExampleConfig={
    START_PAUSE_BUTTON_STATUS,
    title:"Universal Device Controller App",
    menu:{
        link:"/global-input-app/game-example",
        linkText:"Game Example",
        backLink:"/?scrollTo=gameExample",
        bookmark:"gameExample"
    },
    content:[
    "Use Mobile to control applications running on Big Screen devices, IoT devices and  computers without developing separate mobile applications. ",
    "Here is an example for using the Global Input App as the controller for a video game running on a computer. The video application just need to declaratively define the UI elements displayed on the mobile screen and the callback interface for user interactions.",
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
        title:{
                  type:"view",
                  style:{width:"100%",backgroundColor:"green"},
                  content:{
                              type:"text",
                              content:"Device Control Example",
                              style:{color:"white"}
                        }

        },

        upButton:{
          label:"Up",
          type:"button",
          viewId:"row1",
          id:"upButton",
          icon:"up"
        },
        leftButton:{
          label:"left",
          type:"button",
          viewId:"row2",
          id:"leftButton",
          icon:"left"
        },
        rightButton:{
          label:"Right",
          type:"button",
          viewId:"row2",
          id:"rightButton",
          icon:"right"
        },
        downButton:{
          label:"Down",
          type:"button",
          viewId:"row3",
          id:"downButton",
          icon:"down"
        },
        backButton:{
          label:"Disconnect",
          type:"button",
          icon:"disconnect",
          viewId:"footer",
          buttonText:"Disconnect"
        },
        startPauseButton:{
          label:"Start",
          type:"button",
          viewId:"footer",
          value:0,
          id:"startPauseButton",
          options:[{value:START_PAUSE_BUTTON_STATUS.CAN_START,container:{label:"Start"},icon:"play"},{value:START_PAUSE_BUTTON_STATUS.CAN_PAUSE,container:{label:"Pause"},icon:"pause"}]
        },
        newGameButton:{
            label:"New Game",
            type:"button",
            viewId:"footer",
            icon:"reset",
            id:"newGameButton",
            buttonText:"New Game"
        },
        speedUp:{
          label:"+",
          type:"button",
          viewId:"row4",
          id:"speedUp",
          buttonText:"Speed Up",

        },
        speedDown:{
          label:"-",
          type:"button",
          viewId:"row4",
          id:"speedDown",
          buttonText:"Speed Down",
        },
        speedText:{
          id:"speedText",
          type:"info",
          value:{
              type:"text",
              content:"1"
          },
          viewId:"row4"
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
export default gameExampleConfig;
