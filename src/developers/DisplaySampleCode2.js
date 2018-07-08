import React, {Component} from 'react'
import {images} from "../configs";
import {styles} from "./styles";
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
