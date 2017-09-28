# global-input-web
This is the ReactJS web application deployed to

[https://globalinput.co.uk/](https://globalinput.co.uk/)

This ReactJS web application demonstrate the Global Input open-source javascript library available in the following github repository:

[https://github.com/global-input/global-input-react](https://github.com/global-input/global-input-react)

### Checkout

  git clone git@github.com:global-input/global-input-web.git

### Run locally

>```yarn start```

or
>```npm start```

### deploy to your own server

open the file with an editor

```deploy/create_deploy_scripts.sh```

add a new line representing your host:

```createDeployScript <replace-it-with-unique-name>  $projectversion  ~/global-input-secrets/env.sh  <host-name>      <user-name> ```

the ```env.sh``` in this case an empty file.

 
