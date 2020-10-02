
const VIDEO_TITLE_ID="videoTitle";
const VIDEO_SYNOPSIS_ID="synopsis"
export const initData =(title, synopsis)=>({  
      action: "input",
      id: 'selectVideo',
      dataType: "control",
      form: {
        title: "Select Video to Play",
        fields: [{
          id: VIDEO_TITLE_ID,
          type: "info",
          value: {
            type: "text",
            content: title,
            style: {
              fontSize: 18,
              marginTop: 20,
            }
          },
          viewId: "row1",
        }, {
          id: VIDEO_SYNOPSIS_ID,
          type: "info",
          value: synopsis,
          viewId: "row1"
        }, {
          id: "previousVideo",
          label: "Previous Video",
          type: "button",
          icon: "left",
          viewId: "row2"          
        }, {
          id: "nextVideo",
          label: "Next Video",
          type: "button",
          icon: "right",
          viewId: "row2",
          
        }, {
          id: "play",
          label: "Play",
          type: "button",
          icon: "select",
          viewId: "row3"          
        }]
      }    
});

export const setTitleAndSynopsis=(globalInputApp,title,synopsis)=>{  
  globalInputApp.setFieldValueById(VIDEO_TITLE_ID,title);    
  globalInputApp.setFieldValueById(VIDEO_SYNOPSIS_ID,synopsis);        
}