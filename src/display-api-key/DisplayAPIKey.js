import React, {Component} from 'react';

import {AdjustableCodeDataRenderer} from "global-input-react";
import {createMessageConnector} from "global-input-message";
import DisplayAPIKeySource from "./DisplayAPIKeySource";
export default class DisplayAPIKey extends Component {
  constructor(props){
    super(props);
    this.connector=createMessageConnector();
  }

  render() {
    return (
      <div>
                  <div className="codeSettings record">
                       <div className="code">
                          <AdjustableCodeDataRenderer connector={this.connector} type="apikey"/>
                        </div>
                        <div className="label">
                            API Key
                        </div>
                    </div>
                    <div>
                        <DisplayAPIKeySource/>

                    </div>
      </div>
    );
  }
}
