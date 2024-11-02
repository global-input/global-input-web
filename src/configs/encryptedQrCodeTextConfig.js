const encryptedQrCodeTextConfig={
  title:"Encrypted QR Code",
  placeHolder:"Content to Encrypt",
  label:"Content to Encrypt",
  qrcodeLabel:"Encrypted QR Code",

  content:["Press the \"+\" button at the bottom right corner of your screen to create an encrypted QR Code."],
  enterContent:{
      content:["1. Enter the content to encrypt:"]
  },
  encryptionKey:{
    content:["2. Select the encryption key to use:"]
  },
  encrypt:{
    content:["3. Press the \"Encrypt\" button to create encrypted QR Code."]
  },
  fillContent:{
    title:"Content Encryption",
    content:["3. Press the \"Encrypt\" button to encrypt the content with the selected encryption key. The encrypted content will be sent over to the connected application."]
  },
  qrcode:{
    content:["Scan with your Global Input App"],
    content2:["This is an encrypted QR Code. Other Global Input App installations will not be able to decrypt the QR Code unless you have shared the encryption key.",
              "This is particularly useful if you prefer to use paper as the medium to store and transfer encrypted contents."]
  },
  errorMessages:{
      contentIsMissing:"Please enter some text in the field above.",
      failedToEncrypt:"Failed to encrypt the content:",
  }
}
export default encryptedQrCodeTextConfig;
