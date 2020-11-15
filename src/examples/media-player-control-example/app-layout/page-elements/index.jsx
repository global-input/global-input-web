import React from 'react';


export const Title = ({ children }) => {
    return (<div style={styles.title}>{children}</div>);
}
export const P = ({ children}) => (<div style={styles.paragraph}>{children}</div>);


export const A = ({ href, children }) => (<a href={href} style={styles.link} target="__blank">{children}</a>);



export const TextAreaBox = ({value, id, onChange})=>(
    <textarea  id={id} style={styles.textArea}
    onChange={onChange} value={value}/>
);


const styles = {
    title: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        fontSize: 22,
        color: "#5291CD",
        marginBottom: "20",
        marginLeft: "4vw"
      },
      paragraph: {
          fontSize: 16,
          display: "block",
          marginBottom: 20,
          marginTop: 20,
          color: "#5291CD",
          maxWidth:900
      },
      link: {
        fontWeight: 50,
        color: "#6666ff"
      },
      textArea:{
            width:"100%",
            minHeight:200,
            border:"1px solid #888888"
      }
}