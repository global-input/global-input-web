const START_PAUSE_BUTTON_STATUS={
    CAN_START:0,
    CAN_PAUSE:1
}

const gameExampleConfig={
    START_PAUSE_BUTTON_STATUS,
    title:"Game Controller Example",
    appSubtitle:"Game Controller",
    menu:{
        link:"/global-input-app/game-example",
        linkText:"Game Example",
        backLink:"/?scrollTo=gameExample",
        bookmark:"gameExample"
    },
    content:[
    "An example of using the Global Input App as the controller for a video game running on another device. The application declares a set of UI elements and their callbacks functions to receive UI events from the Global Input App.",
    "The application customise the UI elements and the layout structure to suit different application needs.",
    {type:"line", content:["This demonstrate how to use ",{
      type:"a", content:"the global-input-message", href:"https://github.com/global-input/global-input-message"
    }, " WebSocket JavaScript library  to introduce mobile control to the applications running on Big Screen devices, IoT devices and  the web applications without doing any any mobile applicaiton development."]}],

    advert:{
            duration:10000,
            items:[{
              title:"Universal Device Input App",
              content:["Brings Mobile Control to the Applications without Mobile Development",
                      "One Mobile Application Solution for all Applications",
                      "Solution for Application Running on IoT, Smart TV, Office Equipments, and Web Applications"],
              className: "animateLeftRight"
            },{
              title:"Open Source Solution for Multi-Device Corporate Environments.",
              content:["Secure Platform for Device Applications to Communicate with Each Other",
                      "Automation with Encrypted Storage and Encrypted Data Tranfer "],
              className: "animateWithRotate"
            }]

    },

    form:{
        title:"Device Control Example",
        upButton:{

          type:"button",
          viewId:"row1",
          id:"upButton",
          icon:"up"
        },
        leftButton:{

          type:"button",
          viewId:"row2",
          id:"leftButton",
          icon:"left"
        },
        rightButton:{

          type:"button",
          viewId:"row2",
          id:"rightButton",
          icon:"right"
        },
        downButton:{          
          type:"button",
          viewId:"row3",
          id:"downButton",
          icon:"down"
        },
        backButton:{
          label:"Disconnect",
          icon:"disconnect",
          type:"button",
          viewId:"footer",
        },
        startPauseButton:{
          label:"Start",
          type:"button",
          viewId:"footer",
          value:0,
          id:"startPauseButton",
          options:[{value:START_PAUSE_BUTTON_STATUS.CAN_START,label:"Start",icon:"play"},{value:START_PAUSE_BUTTON_STATUS.CAN_PAUSE,label:"Pause",icon:"pause"}]
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
          iconText:"+",
          type:"button",
          viewId:"row4",
          id:"speedUp",
          label:"Speed Up",

        },
        speedDown:{
          iconText:"-",
          type:"button",
          viewId:"row4",
          id:"speedDown",
          label:"Speed Down",
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
        title:"Video Game Controller Example",
        content:"Loading..."
    },
    connected:{
      title:"Video Game Controller Example",
      content:"Scan the QR Code below with the Global Input App on your mobile"
    },
    senderConnected:{
        title:"Video Game Controller Example",
        content:"Please use the controller displayed in the Global Input App to control the game."
    },
    startButton:"Start",
    cancelButton:"Back",
    finishButton:"Back"
}
export default gameExampleConfig;
