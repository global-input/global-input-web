
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
     scrollParentToChild(parent, child) {

          // Where is the parent on page
          var parentRect = parent.getBoundingClientRect();
          // What can you see?
          var parentViewableArea = {
            height: parent.clientHeight,
            width: parent.clientWidth
          };

          // Where is the child
          var childRect = child.getBoundingClientRect();
          // Is the child viewable?
          var isViewable = (childRect.top >= parentRect.top) && (childRect.top <= parentRect.top + parentViewableArea.height);

          // if you can't see the child try to scroll parent
          if (!isViewable) {
            // scroll by offset relative to parent
            parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top
          }
     }


}
