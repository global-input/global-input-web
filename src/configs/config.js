import config from "./prod";
config.videos={
   base:"https://globalinput.co.uk/videos",
   game:function(){return this.base+"/game.mp4";},
   videoPlayer:function(){return this.base+"/play-video.mp4";},
   sendMessage:function(){return this.base+"/send-message.mp4";},
}
export default config;
