import React from 'react';

const PageContainer = ({ children }) => {
    return (
         <div style={styles.pageContainer}>
              <div style={styles.pageContent}>
                   <div style={styles.bodyContent}>{children}</div>

              </div>
         </div>


    );
};
export default PageContainer;

export const styles = {

    pageContainer: {
      display: "flex",
      flexDirection: "column" as 'column',
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#5291CD",
      width: "100%"
    },
    pageContent: {
      padding: 10,
      backgroundColor: "white",
      width: "100%",

    },
    bodyContent: {
        paddingTop: 10,
        display: "flex",
        flexDirection: "column" as 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
      },

}