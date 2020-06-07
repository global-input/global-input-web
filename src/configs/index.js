export const config={    
    apikey:"k7jc3QcMPKEXGW5UC",
    url:"https://globalinput.co.uk",
    id:'globalInputApp',
    videos:{
      location:"https://media.iterativesolution.co.uk/video",
      game:function(){return this.location+"/globabl_input_game_control.mp4";},
      videoPlayer:function(){return this.location+"/glbal_input_media_player.mp4";},
      sendMessage:function(){return this.location+"/globbal_input_send_message.mp4";},
      formTransfer:function(){return this.location+"/global_input_transfer_form_2.mp4";},
      signin:function(){return this.location+"/global_input_sign_in_2.mp4";},
      mobileContentTransfer:function(){return this.location+"/copy-and-paste.mp4";},
      qrPrinting:function(){return this.location+"/gloal_input_print_qr_2.mp4";},
      globalInputHome:function(){return this.location+"/global_input_home_3.mp4";},
      tutorialPart1:function(){return this.location+"/global_input_sign_in.mp4";}
    },
    docs:{
      security:"https://www.linkedin.com/pulse/security-strategy-business-applications-dilshat-hewzulla/",
      smartphoneoperateonapplications:"https://medium.com/@hewzulla/using-smartphones-to-operate-on-applications-running-on-computers-and-other-devices-e397668149f8"
    },
    paths:{
          examples:{
              contentTransfer:{path:"/global-input-app/content-transfer",linkText:"Content Transfer"},
              gameControl:{path:"/global-input-app/game-example",linkText:"Game Control"},
              mediaPlayer:{path:"/global-input-app/video-player",linkText:"Media Player Control"},              
              sendMessage:{path:"/global-input-app/send-message",linkText:"Send Message"},
              transferForm:{path:"/global-input-app/form-data-transfer",linkText:"Transfer Form Data"},              
              mobileEncryption:{path:"/global-input-app/mobile-encryption",linkText:"Mobile Encryption", oldpath:"/global-input-app/qr-printing"},
          },
          contactus:{path:"/global-input-app/contact-us", linkText:"Contact Us"},

          getAppScreen:{path:"/global-input-app/get-app",linkText:"GET IT FREE"},
          home:{path:"/",linkText:"Home"},
          learnMore:{path:"/global-input-app/documentation",linkText:"Learn More"},
          secondScreen:{path:"/global-input-app/second-screen-experience"},
          mobileControl:{path:"/global-input-app/mobile-input-control"},
          mobileAuthentication:{path:"/global-input-app/mobile-authentication"},
          mobilePersonalStorage:{path:"/global-input-app/mobile-personal-storage"},


          privacy:{path:"/global-input-app/privacy",linkText:"Privacy"},


          aboutContentEncryption:{path:"/global-input-app/mobile-content-encryption"},
          mobileContentTransfer:{path:"/global-input-app/mobile-content-transfer"}
      },
      links:{
          websocket:{
              url:"https://github.com/global-input/global-input-node",
          },
          chromeExtension:{
              url:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp",
              websites:"https://github.com/global-input/chrome-extension/tree/master/application-controls"
          },
          firefox:{
            url:"https://addons.mozilla.org/en-GB/firefox/addon/global-input-app/",
          },
          jsExtension:{
              url:"https://github.com/global-input/global-input-message"
          },
          reactJSExtension:{
              url:"https://github.com/global-input/global-input-react"
          },

         tutorialP1:{
              url:"https://www.youtube.com/watch?v=7-vavraSj-s"
         },
         wordpressPlugin:{
           url:"https://en-gb.wordpress.org/plugins/wp-globalinput-login/"
         },
        authenticationDemo:{url:"https://www.youtube.com/watch?v=jLIIrlEoQXM"},
        introductionVideo:{url:"https://www.youtube.com/watch?v=HzeTY1TA4V8"},
        TransferFormGigHub:{url:"https://github.com/global-input/transfer-form-data-example"},
        appdownload:{
              appStore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
              playStore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
        }
      }
};

