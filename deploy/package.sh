source deploy/util.sh
yarn build
mvn package
getProjectVersionFromPom
deploy/create_deploy_scripts.sh
