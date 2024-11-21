import { config } from "../../web-config";

export const FIELDS = {
  home: {
    id: "back-to-website-home",
    type: "button",
    label: "Home",
    viewId: "row1",
  },
  privacy: {
    id: "website-privacy",
    type: "button",
    label: "Privacy",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  contactUs: {
    id: "website-contact-us",
    type: "button",
    label: "Contact Us",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  getItFree: {
    id: "website-get-it-free",
    type: "button",
    label: "Get It",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  mobileAuthentication: {
    id: "about-mobile-authentication",
    type: "button",
    label: "Mobile Authentication",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  mobileInputControl: {
    id: "about-mobile-input-control",
    type: "button",
    label: "Mobile Control",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  secondScreen: {
    id: "about-second-screen",
    type: "button",
    label: "Second Screen",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  mobileEncryption: {
    id: "about-mobile-encryption",
    type: "button",
    label: "Mobile Encryption",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  mobileSecureStorage: {
    id: "about-mobile-secure-storage",
    type: "button",
    label: "Mobile Secure Storage",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
  mobileContentTransfer: {
    id: "about-mobile-content-transfer",
    type: "button",
    label: "Mobile Content Transfer",
    viewId: "row1",
    style: {
      backgroundColor: "white",
    },
  },
};

export const onFieldChange = (field, navigate) => {
  switch (field.id) {
    case FIELDS.home.id:
      navigate("/");
      break;
    case FIELDS.privacy.id:
      navigate(config.paths.privacy.path);
      break;
    case FIELDS.contactUs.id:
      navigate(config.paths.contactUs.path);
      break;
    case FIELDS.getItFree.id:
      navigate(config.paths.getAppScreen.path);
      break;
    case FIELDS.mobileAuthentication.id:
      navigate(config.paths.mobileAuthentication.path);
      break;
    case FIELDS.mobileInputControl.id:
      navigate(config.paths.mobileControl.path);
      break;
    case FIELDS.secondScreen.id:
      navigate(config.paths.secondScreen.path);
      break;
    case FIELDS.mobileEncryption.id:
      navigate(config.paths.aboutContentEncryption.path);
      break;
    case FIELDS.mobileSecureStorage.id:
      navigate(config.paths.mobilePersonalStorage.path);
      break;
    case FIELDS.mobileContentTransfer.id:
      navigate(config.paths.mobileContentTransfer.path);
      break;
    default:
      return false;
  }
  return true;
};
export const onHomeFieldChange = (field, navigate) => {
  switch (field.id) {
    case FIELDS.home.id:
      navigate("/");
      break;
    default:
      return false;
  }
  return true;
};
