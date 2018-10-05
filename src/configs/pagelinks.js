const pagelinks={
      appStore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
      playStore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
      video:{
          introduction:"https://www.youtube.com/watch?v=HzeTY1TA4V8"
      },
      home:{
          link:"/"
      },
      platform:{
            link:"/global-input-app/help",
            link2:"/global-input-app/platform",
            bookmark:"top",
            url:function(){return this.link+"?scrollTo="+this.bookmark},
            platform:{
                  bookmark:"globalInputPlatform",
                  url:function(){return pagelinks.platform.link+"?scrollTo="+this.bookmark}
            }
      },
      jslibrary:{
        link:"/global-input-app/help/jslibrary",
        bookmark:"globalinputmessage",
        url:function(){return this.link+"?scrollTo="+this.bookmark}
      },
      webSocketServer:{
        link:"/global-input-app/help/proxyRepository",
        linkText:"WebSocket Server",
        bookmark:"websocketserver",
        url:function(){return this.link+"?scrollTo="+this.bookmark}

      },
      contactUs:{
        link:"/global-input-app/contact-us",
      },
      app:{

            link:"/global-input-app/app",
            link2:"/global-input-app/about",
            bookmark:"appintro",
            url:function(){return this.link+"?scrollTo="+this.bookmark},
            reasons:{
                bookmark:"reasonsWhyApp",
                url:function(){return pagelinks.app.link+"?scrollTo="+this.bookmark},
            },
      },
      githubs:{
          jslibrary:"https://github.com/global-input/global-input-message",
          webSocketServer:"https://github.com/global-input/global-input-node"
      },
      samples:{
            formData:{
              link:"/global-input-app/form-data-transfer",
              backLink:"/?scrollTo=formDataTransfer",
              bookmark:"formDataTransfer",
              buildURL:function(req){
                    return this.link+"?formData="+req.formData;
              },
              url:function(){return "/?scrollTo="+this.bookmark},
            },
            chromeExtension:{
              link:"/",
              bookmark:"chromeExtension",
              url:function(){return "/?scrollTo="+this.bookmark},

            },
            qrPrinting:{
                link:"/global-input-app/qr-printing",
                backLink:"/?scrollTo=qrPrinting",
                bookmark:"qrPrinting",
                url:function(){return "/?scrollTo="+this.bookmark},

            },
            contentTransfer:{
              link:"/global-input-app/content-transfer",
              backLink:"/?scrollTo=contentTransfer",
              bookmark:"contentTransfer",
              url:function(){return "/?scrollTo="+this.bookmark},
            },
            sendMessage:{
              link:"/global-input-app/send-message",
              backLink:"/?scrollTo=sendMessage",
              bookmark:"sendMessage",
              url:function(){return "/?scrollTo="+this.bookmark},
            },
            mediaPlayer:{
              link:"/global-input-app/video-player",
              backLink:"/?scrollTo=videoPlayer",
              bookmark:"videoPlayer",
              playerBookMark:"videoPlayer",
              url:function(){return "/?scrollTo="+this.bookmark},
            },
            gameControl:{
              link:"/global-input-app/game-example",
              backLink:"/?scrollTo=gameExample",
              bookmark:"gameExample",
              url:function(){return "/?scrollTo="+this.bookmark},
            }



      }
};

export default pagelinks;
