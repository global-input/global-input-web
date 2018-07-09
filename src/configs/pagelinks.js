const pagelinks={
      appStore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
      playStore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
      developers:{
            link:"/global-input-app/developers",
            platform:{
                  bookmark:"globalInputPlatform",
                  url:function(){return pagelinks.developers.link+"?scrollTo="+this.bookmark}
            }
      },
      samples:{
            formData:{
              link:"/global-input-app/form-data-transfer",
              backLink:"/?scrollTo=formDataTransfer",
              bookmark:"formDataTransfer",
            },
            chromeExtension:{
              link:"/",
              url:function(){return this.link+"?scrollTo="+this.bookmark},
              bookmark:"chromeExtension"

            },
            qrPrinting:{
                link:"/global-input-app/qr-printing",
                backLink:"/?scrollTo=qrPrinting",
                bookmark:"qrPrinting"

            }



      }
};

export default pagelinks;
