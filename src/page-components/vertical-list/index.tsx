import React from 'react';
import { styleMatchingScreenSize } from "../../components/screen-media";


interface Props {
    title?: string;
    items?: any;
    children?: any;
}
const VerticalList: React.FC<Props> = ({ title, items, children }) => {


    return (
        <div style={styles.container.get()}>

            {renderTitle(title)}
            {renderContent(items, children)}
        </div>
    );
};
const renderTitle = title => {
    if (title) {
        return (<div style={styles.title}>{title}</div>);
    }
    else {
        return null;
    }
}
const renderContent = (items, children) => {
    if (items) {
        return items.map(renderItem);
    }
    else if (children) {
        return children;
    }
    else {
        return null;
    }
}


const renderItem = (content, index) => (<div style={styles.item} key={index}>{content}</div>);


const styles = {
    container: {
        get: styleMatchingScreenSize,
        default: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginRight: 30,
            marginLeft: 30,
        },
        mobile: {
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 50
        },
        screen1245: {
            marginRight: 60,
            marginLeft: 60,

        },


    },
    title: {
        fontSize: 26,
        marginBottom: 15
    },
    item: {
        fontSize: 15,
        marginBottom: 10
    }
};
export default VerticalList;