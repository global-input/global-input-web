import {api} from "../data";
import SocketIOClient from "socket.io-client";

var socket=null;

class Messenger{
   constructor(){
     this.clientId=this.guid();
     var that=this;
     api.getClientIdFromServer().then(function(data){
         that.clientId=data.clientId;
         socket=SocketIOClient(api.baseURL);
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

}
const messenger=new Messenger();
export  {messenger};
