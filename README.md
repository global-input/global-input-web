# global-input-web
This is the ReactJS web application deployed to

[https://globalinput.co.uk/](https://globalinput.co.uk/)

This ReactJS web application demonstrate how to use the Global Input javascript library available in the following github repository:

[https://github.com/global-input/global-input-react](https://github.com/global-input/global-input-react)

### Checkout

> ```git clone git@github.com:global-input/global-input-web.git```

### Run locally

>```yarn start```

or
>```npm start```

This React JS application is created with ```create-react-app```, and [the generated readme file is available here](https://github.com/global-input/global-input-web/blob/master/README-original.md)

### How to deploy it to your own server

open the following file with an editor

```deploy/create_deploy_scripts.sh```

and add the following a new line representing your target host:

```createDeployScript <replace-it-with-a-unique-name>  $projectversion  ~/global-input-secrets/env.sh  <host-name>      <user-name> ```

the ```env.sh``` in this case an empty file.

 then package it by running the following command:

 ```deploy/package.sh```

 and then deploy it to your host:

 ```deploy/<replace-it-with-unique-name>.sh```

 above script will be generated when you run the ```deploy/package.sh```

It will just copy the static files to the host.
