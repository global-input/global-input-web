const ActionNames ={
  SET_API_KEY: "SET_API_KEY_SETTINGS",
  SET_SECURITY_GROUP:"SET_SECURITY_GROUP_SETTINGS",
  SET_CODE_AES:"SET_CODE_AES_SETTINGS",
  SET_CLIENT_KEY:"SET_CLIENT_KEY",
  SET_APP_LOGIN_TIME_OUT:"SET_APP_LOGIN_TIME_OUT",
  SET_PRESERVER_SESSION:"SET_PRESERVER_SESSION",
  SET_PROXY_URL:"SET_PROXY_URL"
}

const initialState={
     apikey:"SOh85GNXT8TXLCTEc",
     securityGroup:"1CNbWCFpsbmRQuKdd",
     codeAES:"LNJGw0x5lqnXpnVY8",
     client:"",
     appLoginTimeout:120000,
     preserveSession:true,
     proxyURL:"https://globalinput.co.uk"
}

export const globalInputSettings={
      reducer:function (state=initialState, action){
              switch(action.type){
              case ActionNames.SET_API_KEY:
                            return Object.assign({},state,{apikey:action.apikey});
              case ActionNames.SET_SECURITY_GROUP:
                            return Object.assign({},state,{securityGroup:action.securityGroup});
              case ActionNames.SET_CODE_AES:
                           return Object.assign({},state,{codeAES:action.codeAES});
              case ActionNames.SET_CLIENT_KEY:
                            return Object.assign({},state,{client:action.client});
              case ActionNames.SET_PROXY_URL:
                            return Object.assign({},state,{proxyURL:action.proxyURL});
              case ActionNames.SET_APP_LOGIN_TIME_OUT:
                            return Object.assign({},state,{appLoginTimeout:action.appLoginTimeout});
              case ActionNames.SET_PRESERVER_SESSION:
                            return Object.assign({},state,{preserveSession:action.preserveSession});

                         }
          return state;
        },
      actions:{
                apikey:function(apikey){
                    return {
                        type: ActionNames.SET_API_KEY,
                        apikey
                      };
                },
                securityGroup:function(securityGroup){
                    return{
                        type: ActionNames.SET_SECURITY_GROUP,
                        securityGroup
                      };
                },
                client:function(client){
                    return{
                        type: ActionNames.SET_CLIENT_KEY,
                        client
                      };
                },
                codeAES:function(codeAES){
                    return{
                    type: ActionNames.SET_CODE_AES,
                    codeAES
                    };
                },
                appLoginTimeout:function(appLoginTimeout){
                    return{
                    type: ActionNames.SET_APP_LOGIN_TIME_OUT,
                    appLoginTimeout
                    };
                },
                proxyURL:function(proxyURL){
                    return{
                        type: ActionNames.SET_PROXY_URL,
                        proxyURL
                      };
                },
                preserveSession:function(preserveSession){
                    return{
                    type: ActionNames.SET_PRESERVER_SESSION,
                    preserveSession
                    };
                },

      }

};
