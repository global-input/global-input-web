


import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'
import {DisplaySource} from "../components";



export default class SimpleInputSource extends DisplaySource{
renderSource(){
return(


<pre>{`
  import React, {Component} from 'react'

  import {CodeDataRenderer} from "global-input-react";



  import {config} from "../configs";


  const linenumber=10;
  export default class SimpleInput extends Component {

    constructor(props){
       super(props);
       this.state={content:""};
    }


   submit(){
     this.props.onComplete();
   }
   setContent(content){
     this.setState(Object.assign({}, this.state,{content}));
   }
   buildGlobalInputConfig(){
     return {
           url:config.url,
           apikey:config.apikey,
           securityGroup:config.securityGroup,
           initData:{
             action:"input",
             dataType:"text",
             form:{
                   title:"Simple Input Example",
                   fields:[{
                         label:"Content",
                         value:this.state.content,
                         operations:{
                             onInput:this.setContent.bind(this),
                         },
                         nLines:linenumber
                   },{
                        label:"Finish",
                        type:"button",
                        operations:{
                           onInput:this.submit.bind(this)
                        }

                    }]
             }
          }


     };
   }


    render() {

      return (
      <div className='simpleServiceContainer'>
                <div className="applicationContainer">

                     <div className="simpleFormContainer">

                             <div className="contetAndLabelRecord">
                                 <textarea rows={linenumber} cols="50" onChange={(evt) => {
                          			this.setContent(evt.target.value);
                                this.globalInput.connector.sendInputMessage(evt.target.value,0);
                  				    }} value={this.state.content}/>
                             </div>
                             <div className="contetAndLabelRecord">
                               <div className="button">
                                 <a onClick={(evt) => {
                                                this.submit();
                                            }}>

                                     Finish


                                 </a>
                                 </div>
                            </div>
                    </div>

                    <CodeDataRenderer service={this}  config={this.buildGlobalInputConfig()} level="H" size="300"/>
                </div>

        </div>

      );
    }
  }



  `}</pre>

)
}

}
