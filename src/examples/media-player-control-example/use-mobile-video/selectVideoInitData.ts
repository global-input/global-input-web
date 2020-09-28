export default (video)=>({  
      action: "input",
      id: 'selectVideo',
      dataType: "control",
      form: {
        title: "Select Video to Play",
        fields: [{
          id: "videoTitle",
          type: "info",
          value: {
            type: "text",
            content: video.title,
            style: {
              fontSize: 18,
              marginTop: 20,
            }
          },
          viewId: "row1",
        }, {
          id: "sunopsis",
          type: "info",
          value: video.synopsis,
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
