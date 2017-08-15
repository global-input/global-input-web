import React, {Component} from 'react';

import {CodeDataRenderer} from "global-input-react";
import {config} from "../configs";

export default class DisplayPrePairing extends Component {

  render() {

    return (
      <div>
                  <div className="applicationContainer">
                       <div className="code">
                              <CodeDataRenderer service={this} type="pairing" config={{securityGroup:config.securityGroup}} level="H" size="300"/>
                        </div>
                    </div>
      </div>
    );
  }
}
