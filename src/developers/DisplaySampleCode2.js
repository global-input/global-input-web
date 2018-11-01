import React, {Component} from 'react'
import {DisplaySourceCode} from "../components";



export  default class DisplaySampleCode2 extends Component {
    render(){
        return(
          <DisplaySourceCode>
                  <pre>
{`
                ...
                fields:[{
                    type:"button",
                    label:"Start",
                    style:{
                        borderColor:"green",
                    },
               ...
`}

                  </pre>
          </DisplaySourceCode>

        );

    }

}
