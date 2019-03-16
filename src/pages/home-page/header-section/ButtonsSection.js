import React from 'react';
import ButtonsContainer from '../../../page-components/buttons-container';
import {WhiteRoundButton,BlueRoundButton} from '../../../page-components/round-buttons';

import pages from '../../../pages';

const ButtonsSection=props=>{
          return(
            <ButtonsContainer>
              <WhiteRoundButton to={pages.pageLinks.learnMore}>Read More</WhiteRoundButton>
              <BlueRoundButton to={pages.pageLinks.getApp}>Get GIA App Free</BlueRoundButton>
            </ButtonsContainer>
          );

}
export default ButtonsSection;
