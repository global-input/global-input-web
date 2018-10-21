import config from "./prod";
config.videos={
   base:"https://globalinput.co.uk/videos",
   location:"http://media.iterativesolution.co.uk/video",
   game:function(){return this.location+"/globabl_input_game_control.mp4";},
   videoPlayer:function(){return this.location+"/glbal_input_media_player.mp4";},
   sendMessage:function(){return this.location+"/globbal_input_send_message.mp4";},
   formTransfer:function(){return this.location+"/global_input_transfer_form_2.mp4";},
   signin:function(){return this.location+"/global_input_sign_in_2.mp4";},
   copyAndPaste:function(){return this.base+"/copy-and-paste.mp4";},
   qrPrinting:function(){return this.location+"/gloal_input_print_qr_2.mp4";},
   globalInputHome:function(){return this.location+"/global_input_home_3.mp4";},
}
config.docs={
    security:"https://www.linkedin.com/pulse/security-strategy-business-applications-dilshat-hewzulla/?lipi=urn%3Ali%3Apage%3Ad_flagship3_inshare%3B7%2FQdFEI5TSuBvNX7Fmbu1A%3D%3D"
}
export default config;
