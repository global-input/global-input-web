
source deploy/util.sh
yarn build
mvn package
getProjectVersionFromPom
echo $projectversion >/tmp/global_input_web_deploy_version.txt
displayDeploymentHelp packaging
