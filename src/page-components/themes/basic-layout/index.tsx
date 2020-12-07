import React from 'react'


import { PageHeader } from "../../../page-header";

interface Props {
        selected?: string;
}
const BasicLayout: React.FC<Props> = ({ selected, children }) => (
        <div style={styles.content} id="topContent">
                <PageHeader selected={selected} />
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
