import { useNavigate } from "react-router-dom";
import { useMobile } from "../../mobile";
import { config } from "../../web-config";
export * from "../../mobile";
export const useConnectToMobile = () => {
  const navigate = useNavigate();
  const mobile = useMobile(initData);
  mobile.setOnchange(({ field }) => {
    switch (field.id) {
      case FIELDS.home.id:
        navigate("/");
        break;
      case FIELDS.encryption.id:
        navigate(config.paths.examples.mobileEncryption.path);
        break;
      default:
    }
  });
  return mobile;
};

const FIELDS = {
  encryption: {
    id: "mobile-encryption-example",
    type: "button",
    label: "See It In Action",
    icon: "encrypt",
    viewId: "row2",
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
  id: "about-mobile-encryption",
  form: {
    title: "About Mobile Encryption",
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
