import React from 'react';

import { styleMatchingScreenSize } from "../../app-layout/screen-media";

interface HomeTitleSectionProps {
        title: string;
        subtitle: string;
        description?: string;
}
const HomeTitleSection: React.FC<HomeTitleSectionProps> = ({ title, subtitle, description, children }) => (
        <div style={styles.homeTitleSection.get()}>
                <div style={styles.title.get()}>{title}</div>
                <div style={styles.subtitle.get()}>{subtitle}</div>
                {displayDescription(description)}
                {children}
        </div>);


const displayDescription = description => {
        if (!description) {
                return null;
        }
        return (
                <div style={styles.description.get()}>{description}</div>
        );
}
const PageTitleSection = ({ title, subtitle, children }) => (<div style={styles.pageTitleSection.container}>
        <div style={styles.pageTitleSection.title}>{title}</div>
        <div style={styles.pageTitleSection.subtitle}>{subtitle}</div>
        {children}
</div>);



const ReadMorePageTitleSection = props => (<div style={styles.readMorePage.container}>
        <div style={styles.readMorePage.title}>{props.title}</div>
        <div style={styles.readMorePage.subtitle}>{props.subtitle}</div>
        {props.children}
</div>);


export var styles = {

        homeTitleSection: {
                get: styleMatchingScreenSize,
                default: {
                        height: 530,
                        marginTop: "5vw",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        color: "white",
                        width: "100%",
                        zIndex: 50,
                        marginBottom: 30,
                },
                desktop: {
                        height: 330,

                },
                smallScreen: {
                        height: 530,
                },
                mobile: {
                        justifyContent: "flex-start",

                        height: "auto",
                        marginBottom: 50,
                }

        },
        pageTitleSection: {
                container: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        color: "white",
                        width: "100%",
                } as React.CSSProperties,
                title: {
                        fontSize: 30,
                        fontFamily: "Tisa Sans Pro"
                },
                subtitle: {
                        fontSize: 14,
                        fontFamily: "Tisa Sans Pro"
                }

        },


        readMorePage: {
                container: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        color: "white",
                        width: "100%",
                } as React.CSSProperties,
                title: {
                        fontSize: 30,
                        fontFamily: "Tisa Sans Pro"
                },
                subtitle: {
                        fontSize: 14,
                        fontFamily: "Tisa Sans Pro"
                }

        },


        title: {
                default: {
                        fontSize: 40,
                        marginLeft: 70,
                },
                mobile: {
                        fontSize: "8vw",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 50

                },
                get: styleMatchingScreenSize

        },
        subtitle: {
                default: {
                        fontSize: 20,
                        marginLeft: 70,
                },
                mobile: {
                        fontSize: "4vw",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: 20
                },
                get: styleMatchingScreenSize
        },
        description: {
                default: {
                        fontSize: 16,
                        marginLeft: 70,
                },
                mobile: {
                        fontSize: "4vw",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: 20
                },
                get: styleMatchingScreenSize
        }
};


export { HomeTitleSection, PageTitleSection, ReadMorePageTitleSection };
