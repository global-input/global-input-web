locahost="http://192.168.0.5:1337"
locahost="http://192.168.0.5:1337"
prodhost="https://globalinput.co.uk"

sed -i -e "s,$prodhost,$locahost,g" node_modules/global-input-message/lib/GlobalInputMessageConnector.js
