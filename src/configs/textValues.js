const textValues={
  urls:{
    apk:"https://globalinput.co.uk/app/GlobalInputApp.apk",
    github:{
        web:"https://github.com/global-input/global-input-web"
    }
  },
  home:{
     title:"Global Input Software",
     subtitle:"Connectings applications securely via phone camera",
     copyrightinfo:"Copyright © 2017-2022 by Iterative Solution Limited",
     content:{
        p1:"The Global Input open-source software enables service applications running on computers, Smart TVs, or any other devices to transfer some activities securely to the mobile app to allow users to operate with their mobile devices. The communication between them is established using the end-to-end encryption and the keys are passed over to the mobile app via the mobile's camera.",
        p2:"If you would like to try it out the Global Input software, please install the GlobalInput app on your mobile. Launch the app on your mobile and visit this page with a browser on your computer. And then you will be able to interact with the sample applications listed on this page with your mobile.",
        p3:"The mobile app will soon be available in both Android and Apple stores (in the submission process at the moment). If you have android phone, you can download and install the apk file directly from the following location and install it into your phone.",

        p4:"Here I listed some sample applications with source codes to demonstrate how easy it is to extend a software application to have this capability.",
        p5:"Most of the examples given here are in React.js framework, but it is equally simple to use plain old Javascript code or jQuery. The Java libraries are also available for the Java web applications rendering the page on the server side. I am in the process of writing the libraries for other programming languages as well. If you have any suggestions you can write to me (hewzulla@gmail.com) or you are welcome to ",
        p6:"work together with me",
     }
  },
  qr:{
    title:"QR Code Printing Service",
    content:{
      p1: "As the start,  you may try the QR Code Printing Service by clicking on the following link. Launch the Global Input App on your smart phone, and point your phone camera to  the QR code displayed on the right. When your mobile phone is connected to the sample application, the QR Code will be hightlighted indicating that an user is connected to the service and also the user ids are listed underneath.",
      p2:"When the app is connected to the service application, the service app sends the metadata information such as the title of the service, the fields and the buttons etcs to the mobile app to allow the user to interact with the application without looking at the computer or the TV screen.",
      p3:"When the app receives the form from the service applications, and it identifies that the service app is requesting the content of the QR code, it present user with a list of data items inside the app, so the form can be prefilled with the data that the user has selected. One of the features is to print the encrypted password or secrets on papers.  The password encryption key is generated on the first use and stay inside the app and will not be transmitted over the network. So only the phone that encrypts the password can decrypt it back. When app identifies a password via the phone camera, it immediately decrypts it and displays it on the screen.",
      p4:"And also, QR printing Service demonstrates the possibilities that the public places like train stations and airports can install services with screens without keyboard or mouse and allow customers to operate on them securely via smart phones. Even in the case of devices with no screen, a printed QR label/ticket can do the job. Imagine the possibility of easily controlling IoT devices with your mobile phones without any hassle... "

    }
  },
  signin:{
    title:"Sign In Example",
    content:{
      p1:'The following is a Sign In sample code, clicking on it to try it out.',
      p2:"Although it is indeed an ugly and useless login form, it serves the purpose. You can sign in via the mobile phone and see the action on the screen while you are typing.  Transferring the login process onto mobile makes sense because a user might be much more comfortable to enter her credential on his/her mobile rather than on a computer keyboard, especially in public places. Beside these, many users may have been storing passwords on mobile devices.  Also if the app is running on smart TV etc that does not have keyboard, it will make even more sense to have the ability to transfer the login process over to the mobile."
    }
  },
  simpleInput:{
    title:"Simple Input (two way) Example",
    content:{
        p1:"Another example is the two-way editing, that you can edit both on computer and mobile at the same time and changes reflected on both screens. Click on the following link to check it out. Again you need to use the Global Input App to connect your mobile to the sample service application.",
        p2:"When you enter some text, you may prefer to use both your mobile and computer at the same time, for example, you may find it easier to do copy and paste content from Internet on your computer and do other modifications with your mobile etc."
    }
  },
  pairing:{
    title:"Pair handsets",
    content:{
      p1:"In some cases you would like to allow only some specific handsets that are pre-paired with your service applications to be able to connect to your services. You can do so by displaying or printing out pairing data, and the phone needs to be paired can simply be pointed to the display QR Code.  Click on the following link to see how it works.",
      p2:"It should display a dialog on the mobile phone whether it accept the pairing.  Before pairing, you can print out your existing pairing data for later importing purposes before accepting a different pairing data."
    }
  }

};
export default textValues;
