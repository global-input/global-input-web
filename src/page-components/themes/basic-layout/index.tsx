import React from 'react'


import TopHeaderSection from "../../top-header-section";

interface Props {
        selected?: string;
        onLogoClick?: () => void;
}
const BasicLayout: React.FC<Props> = ({ selected, children, onLogoClick }) => (
        <div style={styles.content} id="topContent">
                <TopHeaderSection selected={selected} onLogoClick={onLogoClick} />
                {children}
        </div>
);


var styles = {
        content: {
                paddingTop: 10,
                display: "flex",
                flexDirection: "column" as 'column',
                justifyContent: "flex-start",
                alignItems: "center",
                //  backgroundColor:"#A9C8E6", //#4880ED
                width: "100%",
        }
};

export default BasicLayout;
