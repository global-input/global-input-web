import React from 'react';
import styled from 'styled-components';

export const Container =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
`;

export const Content=styled.div`
    width:95%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    backgroundColor: rgb(219,240,240);
    align-items: center;
    padding:10px;

`;
export const AppTitle=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 1em;
    color: #445566;
    font-family: Georgia, Times, Serif;
    @media screen and (min-width:300px){
        font-size:1.5em;
    }
    @media screen and (min-width:400px){
        font-size:2em;
    }
},`;
export const SourceLink=styled.a.attrs({
    href:'https://github.com/global-input/mobile-encryption',
    rel:'noreferrer noopener',
    target:'_blank'})`
    color: #153E85;
    font-weight: 100;
    font-family: Georgia, Times, Serif;
    font-size: 0.8em;
    @media screen and (min-width:300px){
        font-size:1em;
    }
    @media screen and (min-width:400px){
        font-size:1.5em;
    }

    `;


export const P = styled.div`
    font-size: 16px;
`;





export const AppContainer: React.FC<AppContainerProps> = ({ children, domain, title }) => (
    <Content>
            <AppTitle>{title}</AppTitle>
                <MessageLink href="https://github.com/global-input/mobile-encryption">Source Code</MessageLink>
                <div style={styles.domain}>{domain}</div>
        {children}
    </Content>

);






export const Title: React.FC = ({ children }) => (
    <div style={styles.title}>{children}</div>
);

export const A = ({ href, children }) => (<a href={href} style={styles.link} target="__blank">{children}</a>);



export const LoadingCircle = () => (
    <div style={styles.loading}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
            <path fill="#C779D0" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite" />
            </path>
        </svg>
    </div>
);

interface DisplayErrorMessageProps {
    errorMessage: string | null;
}
export const DisplayErrorMessage: React.FC<DisplayErrorMessageProps> = ({ errorMessage, children }) => (
    <div style={styles.errorMessage}>
        {errorMessage}
        {children}
    </div>
);


export const QRCodeContainer: React.FC = ({ children }) => (
    <div style={styles.qrCode}>
        {children}
    </div>
);




interface AppContainerProps {
    children: React.ReactNode;
    domain?: string;
    title: string;

}

export const AppFooter: React.FC = ({ children }) => (
    <div style={styles.appFooter}>
        {children}
    </div>
)



interface BasicLayoutProps {
    title: string;
    domain?: string;
    errorMessage?: string | null;
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({ title, domain, errorMessage, children }) => (
    <AppContainer title={title} domain={domain}>
        {errorMessage ? (<DisplayErrorMessage errorMessage={errorMessage} />) : children}
    </AppContainer>
);


interface MessageProps {
    title?: string;
}

export const MessageContainer: React.FC<MessageProps> = ({ children, title }) => (
    <div style={styles.messageContainer}>
        {title && (<Title>{title}</Title>)}
        <div style={styles.messageText}>
            {children}
        </div>
    </div>
);

interface FormContainerProps {
    domain?: string;
    title?: string;
}
export const FormContainer: React.FC<FormContainerProps> = ({ children, title }) => {
    return (<div style={styles.formContainer}>
        {title && (<Title>{title}</Title>)}
        <div style={styles.fields}>
            {children}
        </div>
    </div>);
};

export const FormFooter: React.FC = ({ children }) => (
    <div style={styles.formFooter}>
        {children}
    </div>
);

export const RowCenter: React.FC = ({ children }) => (
    <div style={styles.rowCenter}>
        {children}
    </div>
);

interface MessageLinkProps {
    href?: string;
    onClick?: () => void;
}

export const MessageLink: React.FC<MessageLinkProps> = ({ href, onClick, children }) => {
    return (<a href={href} style={styles.messageAlink} rel='noreferrer noopener' target='_blank'>{children}</a>);
};

interface MessageButtonProp {
    label: string;
    onClick: () => void;
}

export const MessageButton: React.FC<MessageButtonProp> = ({ label, onClick }) => (<button style={styles.messageAlink} onClick={onClick}>{label}</button>)


const styles = {
    title: {
        display: "flex",
        flexDirection: 'row' as 'row',
        justifyContent: "flex-start",
        fontSize: 20,
        fontWeight: 100,
        whiteSpace: 'nowrap' as 'nowrap',
        padding: 10,
        color: "#153E85"
    },

    link: {
        fontWeight: 50,
        color: "#6666ff"
    },
    loading: {
        display: "flex",
        flexDirection: 'row' as 'row',
        justifyContent: "center",
        fontSize: 20,
        fontWeight: 100,
        whiteSpace: 'nowrap' as 'nowrap'
    },
    errorMessage: {
        width: "100%",
        color: "red",
        display: "flex",
        flexDirection: "row" as 'row',
        justifyContent: "flex-start",
        fontFamily: "Avenir",
        fontSize: 15,
        fontWeight: 100,
        padding: 10
    },
    qrCode: {
        minWidth: 450,
        minHeight: 450,
        display: "flex",
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    domain: {
        width: "100%",
        fontFamily: "Avenir",
        fontSize: 16,
        paddingTop: 10,
        fontWeight: 100,
        color: "#153E85",
        whiteSpace: 'nowrap' as 'nowrap',
        display: "flex",
        flexDirection: "row" as 'row',
        justifyContent: "center",
    },
    appFooter: {
        color: "#153E85",
        fontSize: 16,
        fontWeight: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        width: "100%",
        padding: 10,
        minWidth: "350px"
    } as React.CSSProperties,
    messageContainer: {
        minWidth: 300,
        minHeight: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    } as React.CSSProperties,
    messageText: {
        width: "100%",
        color: "#153E85",
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: 100,
        padding: 20,
        display: 'block'
    },
    messageAlink: {
        paddingLeft: 4,
        paddingRight: 4,
        backgroundColor: 'white',
        border: 0,
        color: "#153E85",
        fontWeight: 100,
        fontSize: 14,
        fontFamily: "Avenir",
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        width: "100%",
        minWidth: 300,
        padding: 10
    } as React.CSSProperties,
    fields: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        width: "100%",
    } as React.CSSProperties,
    formFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        width: "100%",
        padding: 10
    } as React.CSSProperties,
    rowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
    } as React.CSSProperties

}
