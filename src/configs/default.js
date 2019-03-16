var config={
    apikey:"k7jc3QcMPKEXGW5UC",
    url:"https://globalinput.co.uk",
    videos:{
      location:"https://media.iterativesolution.co.uk/video",
      game:function(){return this.location+"/globabl_input_game_control.mp4";},
      videoPlayer:function(){return this.location+"/glbal_input_media_player.mp4";},
      sendMessage:function(){return this.location+"/globbal_input_send_message.mp4";},
      formTransfer:function(){return this.location+"/global_input_transfer_form_2.mp4";},
      signin:function(){return this.location+"/global_input_sign_in_2.mp4";},
      copyAndPaste:function(){return this.location+"/copy-and-paste.mp4";},
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
              qrPrinting:{path:"/global-input-app/qr-printing",linkText:"QR Code Printing"},
              sendMessage:{path:"/global-input-app/send-message",linkText:"Send Message"},
              transferForm:{path:"/global-input-app/form-data-transfer",linkText:"Transfer Form Data"}
          },
          contactus:{path:"/global-input-app/contact-us", linkText:"Contact Us"},
          formOperation:{path:"/global-input-app/about-form-operation",linkText:"Form Operation"},
          getAppScreen:{path:"/global-input-app/get-app",linkText:"Get GIA App Free"},
          home:{path:"/",paths:["/","/index.html","/global-input-app/app","/global-input-app/about"],linkText:"Home"},
          learnMore:{path:"/global-input-app/learn-more",linkText:"Learn More"},
          secondScreen:{path:"/global-input-app/about-second-screen",linkText:"Second Screen"},
          mobileControl:{path:"/global-input-app/about-mobile-control",linkText:"Mobile Input & Control"},
          mobileAuthentication:{path:"/global-input-app/about-mobile-authentication",linkText:"Mobile Authentication"},
          privacy:{path:"/global-input-app/privacy",linkText:"Privacy"},
          secureTransfer:{path:"/global-input-app/about-secure-transfer",linkText:"Secure Content Transfer"},
          printScanQRCodes:{path:"/global-input-app/about-print-scan-qrcodes",linkText:"Print Scan QR Codes"},
          copyAndPaste:{path:"/global-input-app/about-copy-and-paste",linkText:"Copy And Paste Across Devices"},
      },
      links:{
          websocket:{
              url:"https://github.com/global-input/global-input-node",
          },
          chromeExtension:{
              url:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp",
              websites:"https://github.com/global-input/chrome-extension/tree/master/application-controls"
          },
         tutorialP1:{
              url:"https://www.youtube.com/watch?v=7-vavraSj-s"
         },
         wordpressPlugin:{
           url:"https://en-gb.wordpress.org/plugins/wp-globalinput-login/"
         },
        authenticationDemo:{url:"https://www.youtube.com/watch?v=jLIIrlEoQXM"},
        TransferFormGigHub:{url:"https://github.com/global-input/transfer-form-data-example"}
      }
}
export default config;
