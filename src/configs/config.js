import config from "./prod";
config.videos={
   base:"https://globalinput.co.uk/videos",
   game:function(){return this.base+"/game.mp4";},
   videoPlayer:function(){return this.base+"/play-video.mp4";},
   sendMessage:function(){return this.base+"/send-message.mp4";},
   formTransfer:function(){return this.base+"/transfer-form-data.mp4";},
   signin:function(){return this.base+"/sign-in.mp4";},
   copyAndPaste:function(){return this.base+"/copy-and-paste.mp4";},
   qrPrinting:function(){return this.base+"/qr-printing.mp4";},
   globalInputHome:function(){return this.base+"/global_input_home.mp4";},
}
export default config;
