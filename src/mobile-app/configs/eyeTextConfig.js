var eyeTextConfig={
        title:{
           enabled:"Global Input",
           disabled:"QR Code Reader"
        },
        looking:{
                 enabled:"Global Input is enabled",
                 disabled:"Global Input is disabled."
               },
        password:{
          failed:"Failed to decrypt the content!",
          success:"Decrypted QR Code Content"
        },
        clipboard:"Copy",
        pairing:{
            sameData:{
                title:"Service Settings Data",
                message:"Your app already contains the same settings that are provided by the QR Code",
                button:"OK"
            },
            confirm:{
                title:"Modifying Settings",
                message:"Do you want to accept and overwrite your current settings with that provided by the QR Code?",
                confirm:"Accept",
                cancel:"Cancel"
            },
            complete:{
                title:"Settings Modified",
                message:"The settings provided by the QR Code is imported into the app.",
                confirm:"OK"
            }
        },
        errorMessages:{
              title:"Error",
              buttonText:"OK",
        },

        inputDisabled:{
          display:"QR Code Content"
        },


};
export default eyeTextConfig;
