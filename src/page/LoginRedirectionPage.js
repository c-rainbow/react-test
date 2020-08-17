import React from "react";
import { setAccessToken } from "../loginUtil";

//import { useHistory } from "react-router-dom";


export default function LoginRedirectionPage(props) {
  let hash = window.location.hash;
  window.location.hash = "";       
  if(hash.startsWith("#")) {
    hash = hash.slice(1);
  }
  const loginData = {};
  
  console.log("Hash: " + hash);
  const pairs = hash.split("&");
  for(const pair of pairs) {
    const splited = pair.split("=");
    loginData[splited[0]] = splited[1];
    if(splited[0] === "access_token") {
      setAccessToken(splited[1]);
    }
  }
  //let history = useHistory();
  window.location.replace("/");
}