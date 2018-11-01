import React, {Component} from 'react'

import {styles} from "./styles";

export  default class DisplayVideo extends Component {
  ACT_TYPE={
      LOADING:0,
      ERROR:1,
  }

  componentDidMount(){
      this.startThread(this.props);
  }

  componentWillUnmount(){
        if(this.videoPlayStopHandler){
            clearTimeout(this.videoPlayStopHandler);
            this.videoPlayStopHandler=null;
        }
  }

  stopThread(){
      if(this.videoPlayStopHandler){
          clearTimeout(this.videoPlayStopHandler);
          this.videoPlayStopHandler=null;
      }
  }
  startThread(props){
      this.stopThread();
      this.videoPlayStopHandler=setInterval(()=>{
          this.checkVideoShouldStop();
      },2000);
  }
  checkVideoShouldStop(){
      if(this.videoPlayer){
            if(this.isElementInViewport(this.videoPlayer)){
                  if(this.videoPlayerIsVisible){
                     return;
                  }
                  else{
                    this.videoPlayerIsVisible=true;
                    this.videoPlayPlayerBecomeVisible();
                  }
            }
            else{

                    if(!this.videoPlayerIsVisible){
                       return;
                    }
                    else{
                      this.videoPlayerIsVisible=false;
                      this.videoPlayPlayerBecomeInvisible();
                    }

            }


      }
  }
  videoPlayPlayerBecomeVisible(){
    console.log("become visible");
    if(this.videoPlayer.paused){
           this.videoPlayer.play();
     }

  }
  videoPlayPlayerBecomeInvisible(){
    console.log("become not visible");
    if(!this.videoPlayer.paused){
           this.videoPlayer.pause();
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
   this.setState({type:this.ACT_TYPE.ERROR})
   this.stopThread();
}

onCanPlay(){
  this.videoCanPlay=true;
}

  constructor(props){
       super(props);
        this.state=this.getStateFromProps(this.props);
  }
  componentWillReceiveProps(nextProps){
       this.setState(this.getStateFromProps(nextProps))
       this.startThread(nextProps);
   }
   getStateFromProps(props){
           return {type:this.ACT_TYPE.LOADING};
   }

   onError(){
     console.log("onError");
     this.setState({type:this.ACT_TYPE.ERROR})
     this.stopThread();
   }
   onPause(){
     console.log("onPause");
     if(this.videoPlayerIsVisible){
         console.log("paused when visible");
          this.stopThread();
     }

   }
   onPlay(){
     console.log("onPlay");
   }

  renderImage(){
    return (
      <img src={this.props.defaultImage} alt={this.props.defaultImage} title="Your browser does not support the <video> tag" style={styles.image}/>
    );
  }
  render(){
          if(this.state.type===this.ACT_TYPE.LOADING){
            return(
                 <video width="100%"  controls={true} loop={this.props.loop} poster={this.props.defaultImage}
                   muted={true} autoPlay={false}
                 onAbort={this.onAbort.bind(this)}
                 onError={this.onError.bind(this)}
                 onCanPlay={this.onCanPlay.bind(this)}
                 onPause={this.onPause.bind(this)}
                 onPlay={this.onPlay.bind(this)}
                 ref={videoPlayer=>this.videoPlayer=videoPlayer}>

                     <source src={this.props.video} type="video/mp4"/>
                     {this.renderImage()}
                 </video>
            );
          }
          else{
            return(<img src={this.props.defaultImage} alt={this.props.defaultImage} style={styles.image}/>);
          }

    }

}
