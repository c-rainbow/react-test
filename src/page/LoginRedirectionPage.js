import { setAccessToken } from "../loginUtil";


export default function LoginRedirectionPage(props) {
  let hash = window.location.hash;
  window.location.hash = "";       
  if(hash.startsWith("#")) {
    hash = hash.slice(1);
  }

  const pairs = hash.split("&");
  for(const pair of pairs) {
    const splited = pair.split("=");
    if(splited[0] === "access_token") {
      setAccessToken(splited[1]);
    }
  }
  window.location.replace("/");
}