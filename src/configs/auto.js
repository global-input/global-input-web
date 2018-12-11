import config from "./default";
var urltothiswebpage = window.location.href;
var urlpartsofthisurl = urltothiswebpage.split("/");
config.url=urlpartsofthisurl[0]+"//"+window.location.hostname;
export default config;
