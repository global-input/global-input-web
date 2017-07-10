import SocketIOClient from "socket.io-client";

export function createGUID() {
 function s4() {
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
 }
 return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
   s4() + '-' + s4() + s4() + s4();
}
export const api={
   baseURL: "https://globalinput.co.uk",
   socketBaseUrl:function(){
     return this.baseURL;
   },
   serviceURL: function(){
     return this.baseURL+"/global-input";
   },
   qrURL: function(qrcode){
       return this.serviceURL()+"/qr-code/"+qrcode.session+"/"+qrcode.client+"/simple";
   },
   messageURL:function(qrcode){
       return this.serviceURL()+"/messages/"+qrcode.session+"/"+qrcode.client;
   },
   apiHeader: function(){
         return {'Accept': 'application/json',
                 'Content-Type':'application/json' }
   },
   getApi: function(url){
      return fetch(url,{method:"GET", headers:this.apiHeader()}).then(response => {
        if(response.status===401){
              throw new Error(401);
         }
         else if(response.status!==200){
                throw new Error(response.status);
         }
         else {
              return response.json()
        }
      });
   },
   postApi: function(url,data){
       console.log("sending to:"+url+" data:"+JSON.stringify(data));
      return fetch(url,{method:"POST", headers: this.apiHeader(),
                       body: JSON.stringify(data)}
                   ).then(response => {
                     if(response.status===401){
                          return  Promise.reject("error code:"+401);
                      }
                      else if(response.status!==200){
                            return Promise.reject("error code:"+response.status);
                      }
                      else {
                           return response.json()
                     }
                   });

   },
   sendData:function(qrcode,data){
      const posturl=this.messageURL(qrcode);
      return this.postApi(posturl,data);
   }
 };



 class MessageService{
    constructor(){

      this.qrcode={
        session:createGUID(),
        client:createGUID()
      }
      this.socket=null;
    }
    joinSession(session,onReceiveClientMessage){
      this.qrcode.session=session;
      this.connect(onReceiveClientMessage);
    }
    isConnected(){
      return this.socket!=null;
    }
    connect(onReceiveClientMessage){
      if(this.socket && this.connectedClient && this.connectedClient === this.qrcode.client){
        console.log("already connected, so will skip");
        return;
      }

        this.disconnect();
        this.socket=SocketIOClient(api.socketBaseUrl());
        this.connectedClient=this.qrcode.client;
        var messageReceived=function(data){
              const message=JSON.parse(data);
              onReceiveClientMessage(message);
        }
        this.socket.on(this.qrcode.session, messageReceived);

    }
    disconnect(){
        if(this.socket){
          this.socket.disconnect();
          this.socket=null;
        }
    }


   buildMessage(message){
     return {
      client:this.qrcode.client,
      session:this.qrcode.session,
      message:message
     }
   }
   emit(data){
       const jsondata=JSON.stringify(this.buildMessage(data));
       console.log("sending the mssage:"+jsondata+ " too:"+this.config.session);
       this.socket.emit(this.config.session, jsondata);
   }
   sendData(data){
    api.sendData(this.qrcode,this.buildMessage(data)).then(function(data){
       console.log("data is sent");
    });


   }
   onBarCodeRead(barcodedata,onReceiveClientMessage){
     if(barcodedata.se){
        console.log("joing the session:"+JSON.stringify(barcodedata));
        this.joinSession(barcodedata.se, onReceiveClientMessage);
     }
     else{
        console.error("session id is null:");
     }

   }

 }
 export function createMessageService(){
   return new MessageService();
 }
