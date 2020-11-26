import React from 'react';
import { styles, images } from './styles';
import { Link } from 'react-router-dom';


const renderFooter = (link, footerContent) => {
    if (link) {
        return (<div style={styles.footer.text}>
            <Link to={link}>
                MORE <img src={images.arrow} style={styles.arrow} alt='arrow' />
            </Link>
        </div>)
    }
    else if (footerContent) {
        return (
            <div style={styles.footer.buttons}>
                {footerContent}
            </div>)
    }
    else {
        return null;
    }

};
const renderContent = (content, children) => {
    if (content) {
        return content.map((line, index) => (<div style={styles.line} key={index}>{line}</div>));
    }
    if (children) {
        return children;
    }
};

interface Props {
    titleIcon?: string;
    title?: string;
    content?: string[],
    link?: string,
    footerContent?: React.ReactNode;
    scWidth?: number;
}
const IconHeaderCard: React.FC<Props> = ({ titleIcon, title, content, link, children, footerContent, scWidth }) => (
    <div style={styles.card.get()}>
        <div style={styles.icon.container}>
            <img src={titleIcon} style={styles.icon.img} alt="title icon" /></div>
        <div style={styles.title.get()}>{title}</div>
        <div style={styles.content.get()}>
            {renderContent(content, children)}
        </div>
        {renderFooter(link, footerContent)}
    </div>);


export default IconHeaderCard;
