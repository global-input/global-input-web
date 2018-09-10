import config from "./prod";
config.videos={
   base:"https://globalinput.co.uk/videos",
   location:"http://media.iterativesolution.co.uk/video",
   game:function(){return this.location+"/globabl_input_game_control.mp4";},
   videoPlayer:function(){return this.location+"/glbal_input_media_player.mp4";},
   sendMessage:function(){return this.location+"/globbal_input_send_message.mp4";},
   formTransfer:function(){return this.location+"/global_input_transfer_form_2.mp4";},
   signin:function(){return this.location+"/global_input_sign_in.mp4";},
   copyAndPaste:function(){return this.base+"/copy-and-paste.mp4";},
   qrPrinting:function(){return this.base+"/qr-printing.mp4";},
   globalInputHome:function(){return this.location+"/global_input_home_3.mp4";},
}
export default config;
