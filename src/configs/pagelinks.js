const pagelinks={
      appStore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
      playStore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
      platform:{
            link:"/global-input-app/platform",
            platform:{
                  bookmark:"globalInputPlatform",
                  url:function(){return pagelinks.platform.link+"?scrollTo="+this.bookmark}
            }
      },
      jslibrary:{
        link:"/global-input-app/developers/examples/jslibrary",
        bookmark:"globalinputmessage",
        url:function(){return this.link+"?scrollTo="+this.bookmark}
      },
      webSocketServer:{
        link:"/global-input-app/developers/examples/proxyRepository",
        linkText:"WebSocket Server",
        bookmark:"websocketserver",
        url:function(){return this.link+"?scrollTo="+this.bookmark}

      },
      app:{
            link:"/global-input-app/app",
            link2:"/global-input-app/about",
            reasons:{
                bookmark:"reasonsWhyApp",
                url:function(){return pagelinks.app.link+"?scrollTo="+this.bookmark},
            }
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
              }
            },
            chromeExtension:{
              link:"/",
              url:function(){return this.link+"?scrollTo="+this.bookmark},
              bookmark:"chromeExtension"

            },
            qrPrinting:{
                link:"/global-input-app/qr-printing",
                backLink:"/?scrollTo=qrPrinting",
                bookmark:"qrPrinting"

            },
            contentTransfer:{
              link:"/global-input-app/content-transfer",
              backLink:"/?scrollTo=contentTransfer",
              bookmark:"contentTransfer"
            },
            sendMessage:{
              link:"/global-input-app/send-message",
              backLink:"/?scrollTo=sendMessage",
              bookmark:"sendMessage"
            },
            mediaPlayer:{
              link:"/global-input-app/video-player",
              backLink:"/?scrollTo=videoPlayer",
              bookmark:"videoPlayer",
              playerBookMark:"videoPlayer",
            },
            gameControl:{
              link:"/global-input-app/game-example",
              backLink:"/?scrollTo=gameExample",
              bookmark:"gameExample"
            }



      }
};

export default pagelinks;
