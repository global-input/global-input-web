source deploy/util.sh

createDeployScript dev   $projectversion  ~/workspace/global-input/global-input-secrets/dev.sh  udinput.co.uk    root
createDeployScript prod  $projectversion  ~/workspace/global-input/global-input-secrets/prod.sh  node1.globalinput.co.uk      root
