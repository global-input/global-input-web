locahost="http://192.168.0.5:1337"
prodhost="https://globalinput.co.uk"

sed -i -e "s,$prodhost,$locahost,g" node_modules/global-input-message/lib/index.js



prodsession="this.session=this.generatateRandomString(17)"
debugsession="this.session='test-session'"

sed -i -e "s,$prodsession,$debugsession,g" node_modules/global-input-message/lib/index.js


prodaes="this.aes=this.generatateRandomString(17)"
debugaes="this.aes='test-aes'"

sed -i -e "s,$prodaes,$debugaes,g" node_modules/global-input-message/lib/index.js
