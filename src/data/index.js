
export const api={
   baseURL: "https://globalinput.co.uk",
   serviceURL: function(){
     return this.baseURL+"/global-input";
   },
   clientsURL: function(){
      return this.serviceURL()+"/clients";
   },
   qrURL: function(clientID){
       return this.clientsURL()+"/"+clientID+"/qr-code";
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

   getClientIdFromServer: function(){
        return this.postApi(this.clientsURL(),{});
   }


 };
