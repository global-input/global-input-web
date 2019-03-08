import React, {Component} from 'react'

import {styles} from "./styles";

export  default class AutoPlayVideo extends Component {
  RENDER_TYPE={
      VIDEO:0,
      IMAGE:1,
  }
  constructor(props){
        super(props);
        this.state=this.buildInitialState(this.props);
        this.videoAutoPlayed=false;
  }
  buildInitialState(props){
        return {type:this.RENDER_TYPE.VIDEO};
  }


  componentWillUnmount(){
      this.stopThreadForAutoPlayPause();
  }

  stopThreadForAutoPlayPause(){
      if(this.timerHandler){
          clearTimeout(this.timerHandler);
          this.timerHandler=null;
      }
  }
  startThreadForAutoPlayPause(props){
      this.stopThreadForAutoPlayPause();
      this.timerHandler=setInterval(()=>{
          this.doAutoPlayPause();
      },2000);
  }
  doAutoPlayPause(){
      if(!this.videoPlayer){
          return;
      }
      if(this.isElementInViewport(this.videoPlayer)){
          if(this.videoAutoPlayed){
             return;
          }
          this.videoAutoPlayed=true;
          if(this.videoPlayer.paused){
            console.log("autoplayed");
            try{
                this.videoPlayer.play().catch(error=>{
                  console.log("error:"+error);
                });
              }
              catch(error){
                console.error("caused exception in this.videoPlayer.play():"+error);
              }
          }
          else{
                console.log("stopping autoplay because it is may be played manually");
                this.stopThreadForAutoPlayPause();
          }

      }
      else{
        console.log("no in view");
        if(!this.videoAutoPlayed){
           return;
        }
        this.videoAutoPlayed=false;
        if(!this.videoPlayer.paused){
          console.log("autopaused");
          this.videoPlayer.pause();
        }
        else{
              console.log("stopping autoplay because it is may be paused manually");
              this.stopThreadForAutoPlayPause();
        }
      }

  }



isElementInViewport (el) {
      var rect = el.getBoundingClientRect();
      var viewH=(window.innerHeight || document.documentElement.clientHeight);
      var viewW=(window.innerWidth || document.documentElement.clientWidth);

      var y1=rect.top;
      var x1=rect.left;
      var y2=rect.bottom;
      var x2=rect.right;
      if(x1>=0 && y1 >= 0 && y2<=viewH && x2 <=viewW){
        return true;
      }
      else{
        var midx=(x1+x2)/2;
        var midy=(y1+y2)/2;
        if(midx>=0 && midy >= 0 && midy<=viewH && midx <=viewW){
          return true;
        }
        else{
            return false;
        }

      }
}


onAbort(){
    console.log("onAbort");
   this.setState({type:this.RENDER_TYPE.ERROR})
   this.stopThreadForAutoPlayPause();
}


   onError(){
     console.log("onError");
     this.setState({type:this.RENDER_TYPE.ERROR})
     this.stopThreadForAutoPlayPause();
   }
   onPause(){
     console.log("onPause");

   }
   onPlay(){
     console.log("onPlay");
   }
   onLoadedData(){
     console.log("data loaded");
     this.startThreadForAutoPlayPause();
   }


  render(){

          if(this.state.type===this.RENDER_TYPE.VIDEO){
            return(

                 <video width="100%"  controls={true} loop={this.props.loop} poster={this.props.defaultImage}
                   muted={this.props.muted}
                   onAbort={this.onAbort.bind(this)}
                 onError={this.onError.bind(this)}

                 onPause={this.onPause.bind(this)}
                 onPlay={this.onPlay.bind(this)}
                 onLoadedData={this.onLoadedData.bind(this)}
                 ref={videoPlayer=>this.videoPlayer=videoPlayer}>

                     <source src={this.props.video} type="video/mp4"/>
                     {this.renderImage()}
                 </video>

            );
          }
          else if(this.props.posterImage){
            return this.renderImage();
          }
          else{
            return null;
          }


    }
    renderImage(){
      return (
        <img src={this.props.posterImage} alt={this.props.posterImage} style={styles.image}/>
      );
    }

}
