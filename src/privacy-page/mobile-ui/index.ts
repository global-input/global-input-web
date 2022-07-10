import { useHistory } from "react-router-dom";
import { useMobile } from "../../mobile";
export * from "../../mobile";
export const useConnectToMobile = () => {
  const history = useHistory();
  const mobile = useMobile(initData);
  mobile.setOnchange(({ field }) => {
    onFieldChange(field, history);
  });
  return mobile;
};

const FIELDS = {
  intro: {
    type: "info",
    value:
      "You can now read our privacy policy on the big screen. Its content is also loaded into the following text box. You can go back to home screen by press the 'Home' button that is placed after the text box.",
  },
  proxy: {
    type: "info",
    value: {
      type: "view",
      style: {
        width: "98%",
        borderLeftWidth: 10,
        borderLeftColor: "rgb(125,70,121)",
        backgroundColor: "rgb(246,246,246)",
      },
      content: [
        {
          type: "text",
          style: {
            fontSize: 14,
          },
          content:
            "We do not track your activities and we do not store your data. We do not even have a server database or cloud storage to store your data.",
        },
        {
          type: "text",
          style: {
            fontSize: 14,
          },
          content:
            "Our privacy policy applies to our website and all of our Global Input App software components including the mobile app, its extensions and library components.",
        },
        {
          type: "text",
          style: {
            fontSize: 14,
          },
          content:
            "Applications that use our software components allows you to take complete control over your sensitive information, by using your device's storage to store either the data itself or the master encryption key used when encrypting your data.",
        },
        {
          type: "text",
          style: {
            fontSize: 14,
          },
          content:
            "A connected application can always request data on-demand via the mobile app, which will ask you to confirm to push the requested data over to the application. The communication between your devices is secured using end-to-end encryption and the encryption key that starts the session is dynamically generated within your device for each session and can only be accessed via an encrypted QR Code.",
        },
        {
          type: "text",
          style: {
            fontSize: 14,
          },
          content:
            "Your data in your mobile app always stays encrypted and decrypted only at the point of usage. The keys used in the encryption never leave your mobile and are encrypted with a memorable password. This means that you are responsible for backing up your encryption keys in your mobile app and the data that are encrypted with the encryption keys. Since you can export an encryption key as encrypted QR code, and import it simply by scanning it, the process of backing up the keys and sharing between your devices is a straightforward operation.",
        },
      ],
    },
  },
  home: {
    id: "back-to-website-home",
    type: "button",
    label: "Home",
    viewId: "row1",
    icon: "home",
  },
};

const initData = {
  id: "privacy-policy",
  form: {
    title: "Privacy Policy",
    views: {
      viewIds: {
        row1: {
          style: {
            borderWidth: 2,
            borderColor: "#EEEEEE",
            marginBottom: 50,
            width: "98%",
            backgroundColor: "rgb(225, 235, 245)",
          },
        },
      },
    },
    fields: Object.values(FIELDS),
  },
};

const onFieldChange = (field, history) => {
  switch (field.id) {
    case FIELDS.home.id:
      history.push("/");
      break;
    default:
  }
  return false;
};
