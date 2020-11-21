import React from 'react';
import { styles, images } from './styles';

import { withResponsiveComponent } from '../../../components/screen-media';

const HowItWorks = props => {

    if (props.screenMedia && props.screenMedia.biggerThan(700)) {
        return (
            <div style={styles.container}>
                <div style={styles.title}>How It Works</div>
                <div style={styles.howItWorks.get()}>
                    <div style={styles.extension.get()}>
                        <img src={images.extension} alt='Extension' />
                        <div style={styles.itemName}>Install Extension</div>
                    </div>
                    <div style={styles.qrcode.get()}>
                        <img src={images.qrcode} alt='QR Code' />
                        <div style={styles.itemName}>Scan QR Code</div>
                    </div>

                    <div style={styles.mobile.get()}>
                        <img src={images.mobile} alt='Mobile' />
                        <div style={styles.itemName}>Control with Device</div>
                    </div>
                </div>


            </div>
        );
    }
    else {
        return null;
    }

};

const ResponsiveHowItWorks = withResponsiveComponent(HowItWorks);
export default ResponsiveHowItWorks;
