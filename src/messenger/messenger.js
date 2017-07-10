import {api} from "../data";


import SocketIOClient from "socket.io-client";

var socket=null;

class Messenger{
   constructor(){
     this.config={};
     this.config.sessionId=this.guid(),
     this.config.clientId=this.guid(),
     


     this.clientId=
     var that=this;
     api.getClientIdFromServer().then(function(data){
         that.clientId=data.clientId;
         //that.clientId="100";
         socket=SocketIOClient(api.socketBaseUrl());
         if(that.ml){
             that.ml.setClientId(that.clientId);
         }
         socket.on(that.clientId, that.onReceiveClientMessage.bind(that));
     });
   }
   guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  getClientId(){
    return this.clientId;
  }
  onReceiveClientMessage(data){
    var obj=JSON.parse(data);
    if(this.ml){
        this.ml.onReceiveClientMessage(obj);

    }
  }
  addMessageListener(ml){
    this.ml=ml;
  }
  sendMessage(data){
      console.log("sending the mssage:"+JSON.stringify(data)+ " too:"+this.getClientId());
      socket.emit(this.getClientId(), JSON.stringify(data));
  }

}
const messenger=new Messenger();
export  {messenger};
