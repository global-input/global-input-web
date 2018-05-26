
import {encrypt,decrypt} from "./util";

var sharedKey="50SUB39ctEKzd6Uv2a84lFK";


 export const codedataUtil={

   buildOptionsFromInputCodedata:function(connector,codedata, options){
        var buildOptions={
          connectSession:codedata.session,
          url:codedata.url,
          aes:codedata.aes,
          apikey:codedata.apikey
        }
        if(!options){
            return buildOptions;
        }
        else{
            return Object.assign(buildOptions,options);
        }

   },
   buildInputCodeData:function(connector,data={}){
       var codedata=Object.assign({},data,{
                   url:connector.url,
                   session:connector.session,
                   apikey:connector.apikey,
                   action:"input",
                   aes:connector.aes
       });
       if(connector.codeAES){
          return "A"+encrypt("J"+JSON.stringify(codedata),connector.codeAES);
       }
       else{
          return "NJ"+JSON.stringify(codedata);
       }
   },

   buildPairingData(connector,data={}){
     var codedata=Object.assign({},data,{
                 securityGroup:connector.securityGroup,
                 codeAES:connector.codeAES,
                 action:"pairing"
     });
     return "C"+encrypt("J"+JSON.stringify(codedata),sharedKey);
   },


   onError(options,message, error){
       if(options.onError){
          options.onError(message);
       }
       else{
          console.warn(message);
       }

       if(error){
         console.warn(error);
       }
   },
   processCodeData(connector,encryptedcodedata, options){
     if(!encryptedcodedata){
       console.log("empty codedata");
       return;
     }


     var encryptionType=encryptedcodedata.substring(0,1);
     var encryptedContent=encryptedcodedata.substring(1);
     var decryptedContent=null;
     if(encryptionType==="C"){
          try{
            decryptedContent=decrypt(encryptedContent,sharedKey);
          }
          catch(error){
            this.onError(options,"May not ne a global Input code (C) ",error);
            return;
          }
     }
     else if(encryptionType==="A"){
       var codeAES=connector.codeAES;
       if(options.codeAES){
         codeAES=options.codeAES;
       }
       try{
              decryptedContent=decrypt(encryptedContent,codeAES);
            }
       catch(error){
         this.onError(options,"May not be glbal input code (A)",error);
         return;
       }
     }
     else if(encryptionType==="N"){
        decryptedContent=encryptedContent;
     }
     else{
       this.onError(options,"Not a Global Input code (N)  ");
       return;
     }

      if(!decryptedContent){
        this.onError(options,"Not a global Input code (E)");
        return;
      }
      var dataFormat=decryptedContent.substring(0,1);
      var dataContent=decryptedContent.substring(1);
      var codedata=null;

      if(dataFormat==="J"){
          try{
                codedata=JSON.parse(dataContent);
            }
            catch(error){
              this.onError(options," incorrect format decrypted",error);
              console.warn(" not a json:"+dataContent);
              return;
            }
      }
      else{
          this.onError(options,"unrecognized format decrypted");
          console.log("the code:"+dataContent)
          return;
      }
      if(codedata.action=='input'){
            if(options.onInputCodeData){
                options.onInputCodeData(codedata);
            }
      }
      else if(codedata.action=='pairing'){
            if(options.onPairing){
                options.onPairing(codedata);
            }
      }
   }

}
