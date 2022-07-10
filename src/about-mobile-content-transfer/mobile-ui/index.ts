import { useHistory } from "react-router-dom";
import { useMobile } from "../../mobile";
import { config } from "../../configs";
export * from "../../mobile";
export const useConnectToMobile = () => {
  const history = useHistory();
  const mobile = useMobile(initData);
  mobile.setOnchange(({ field }) => {
    switch (field.id) {
      case FIELDS.home.id:
        history.push("/");
        break;
      case FIELDS.contentTransfer.id:
        history.push(config.paths.examples.contentTransfer.path);
        break;
      default:
    }
  });
  return mobile;
};

const FIELDS = {
  contentTransfer: {
    id: "content-transfer-example",
    type: "button",
    label: "See It In Action",
    icon: "right",
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
  id: "about-mobile-content-transfer",
  form: {
    title: "About Mobile Content Transfer",
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
