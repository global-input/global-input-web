const appTextConfig = {
  sleepingMessage:'Global Input App',
  loadingMessage:'Initialising...',
  permissionDialog: {
    title: 'Permission to use the camera',
    message: 'Require permission to use camera for scanning QR Codes',
  },
  permissionPending: {
    title: 'Permission Pending',
    content: [
      'Waiting for permission granted to use camera. It is required for scanning QR Codes.'
    ],
  },
  notAuthorized: {
    title: 'Not Authorized',
    content: [
      'The permission to use the camera is not granted. The camera permission is needed for scanning the QR Codes.',
      'If you use the app for storing encrypted content only, the camera permission is not needed. In this case, the network connection will not be used. The camera permission is needed for scanning the QR Codes to obtain the information, which is required for data transfer between devices using the end-to-end encryption.'
    ],
  }
};
export default appTextConfig;
