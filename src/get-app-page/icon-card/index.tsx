import React from 'react';

import { styleMatchingScreenSize } from '../../app-layout/screen-media';

import { withResponsiveComponent } from '../../app-layout/screen-media';

interface Props {
     titleIcon?: string;
     title?: string;
     footerContent?: React.ReactNode;
     scWidth?: number
}
const IconHeaderCard = ({ titleIcon, title, children, footerContent, scWidth }) => (
     <div style={styles.card.get()}>
          <div style={styles.icon.container}><img src={titleIcon} style={styles.icon.img} alt='title' /></div>
          <div style={styles.title.get()}>{title}</div>
          <div style={styles.content.get()}>
               {children}
          </div>
          <div style={styles.footer.container}>
               <div style={styles.footer.content.get()}>
                    {footerContent}
               </div>
          </div>
     </div>);



export default IconHeaderCard;



export const CardContainer = withResponsiveComponent(({ children }) => (
     <div style={styles.cardContainer.get()}>
          {children}
     </div>
));


const styles = {

     card: {
          get: styleMatchingScreenSize,
          default: {
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
               alignItems: "flex-start",
               backgroundColor: "#FFFFFF",
               color: "#5291CD",
               width: 400,
               minHeight: 300,


               paddingBottom: 25,
               borderRadius: 5,
               padding: 10,
               position: "relative",

               marginRight: 100,
               marginBottom: 20
          },
          screen1080: {

          },
          narrowMobile: {
               width: "100%",
               marginRight: 0,
               marginBottom: 50,
          },
          mobile: {
               marginBottom: 50,
               marginRight: 0
          },
     },

     icon: {
          container: { width: "100%", marginBottom: 20 },
          img: {
               display: "block",
               marginLeft: "auto",
               marginRight: "auto"
          }

     },
     title: {
          default: {
               fontSize: 20,
               display: "flex",
               flexDirection: "row",
               width: "100%",
               justifyContent: "center",
          },
          desktop: {
               fontSize: 20,
          },
          smallScreen: {
               fontSize: 20,
          },
          mobile: {
               fontSize: 20,
          },
          get: styleMatchingScreenSize
     },
     content: {
          default: {
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
               alignItems: "center",
               paddingLeft: 20,
               paddingRight: 20,
               paddingTop: 20,
               fontSize: 14,
               width: "100%",
               position: "relative"
          },
          desktop: {
               fontSize: 15,


          },
          smallScreen: {
               fontSize: 14,
          },
          screen1080: {
               fontSize: 14,
          },

          mobile: {
               fontSize: 16,
          },
          get: styleMatchingScreenSize
     },

     footer: {
          container: {
               display: "flex",
               flexDirection: "column",
               width: "100%",
               flex: 1,
               justifyContent: "flex-end"
          } as React.CSSProperties,
          content: {
               get: styleMatchingScreenSize,
               default: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    bottom: 5,

               },
               narrowMobile: {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"

               },

          }

     },
     cardContainer: {
          get: styleMatchingScreenSize,
          default: {
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               width: "100%",
               marginTop: 100
          },
          screen1080: {
               flexDirection: "row",
          },
     }


};
