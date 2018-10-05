
export default class GenericUtil{


    getQueryParam(query,variable) {
         if(!query){
           return null;
         }
         query=query.substring(1);
         var vars = query.split('&');
         for (var i = 0; i < vars.length; i++) {
             var pair = vars[i].split('=');
             if (decodeURIComponent(pair[0]) === variable) {
                 return decodeURIComponent(pair[1]);
             }
         }
     }

      processScrollTo(props){
        var scrollTo=this.getQueryParam(props.location.search, "scrollTo");
        setTimeout(function(){
              var elmnt = document.getElementById(scrollTo);
              if(elmnt){
                  elmnt.scrollIntoView();
                  window.scrollBy({top: -70,behavior: "smooth"});
              }

        },200);
      }

      processQueryParameters(props){
             if(props && props.location && props.location.search){
                     this.processScrollTo(props);
             }
      }


}
