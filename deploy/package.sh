
sed -i -e "s,dev,prod,g" src/configs/config.js

source deploy/util.sh
yarn add global-input-message
yarn build
mvn package
getProjectVersionFromPom
deploy/create_deploy_scripts.sh
