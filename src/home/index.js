import React, {Component} from 'react'



export  class Home extends Component {

  render() {
   var appdownloadlink="https://globalinput.co.uk/app/GlobalInputApp.apk";
   var webgithub="https://github.com/global-input/global-input-web";
    return (
      <div>
          <div className="headerSection">
              <h1 className="titleText">Global Input Technology</h1>
              <h3 className="subTitleText">Use the smart pbone's camera to securely connect applications to each other</h3>
          </div>
          <div className="homeContainer">

              <div>
                    Please install GlobalInput app into your mobile and visit this website with your laptop or any device with a screen attached to it.

                    The mobile app will soon be available in both Android and Apple stores (in the submission process).
                    If you have android phone, you can download and install the
                    apk file from the following location and install it into your phone:
                    <div className="appLink">
                       <a href={appdownloadlink}>{appdownloadlink}</a>
                    </div>
                    <div>
                      The Global Input Solution is a set of open-source software libraries & APIs.
                       It enables applications to establish
                      secure communications with each other using the end-to-end encryption.
                      A different and strong encryption key is generated for each session at
                      the client side and
                      it will not be transmitted electronically over the wire.
                      Instead, the keys are transfered via mobile phone's camera only.
                      This means that the communications are extremely secure.
                      This brings many applications and great potentials to make our life much easier!
                      Following is a set of examples with source codes to demonstrate how easy it is
                      to enable any application to be powered by this software libraries.

                      As you will see, that this can be done with just a few extra lines of simple-to-understand codes.

                      Most of the examples given here are in react js, but it is equally simple to use plain Javascript code as well.

                      The Java libraries are also available to enable Java application to be powered by this technology.

                      I am in the process of writing the libraries for other programming languages as well, check this space soon.

                      If you have any suggestions you can write to me (hewzulla@gmail.com) or you are welcome to
                      <a href={webgithub}> work together with me</a>.
                    </div>

              </div>



          </div>
      </div>
            );
  }
}
