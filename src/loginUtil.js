


export const loginClientId = "59x8jyaudw3pnyi722x3e2x9awh385";
const accessTokenKey = "twitch_chat_analyzer_access_token";


export function isLoggedIn() {
    const accessToken = getAccessToken();
    return accessToken !== null;
}


export function setAccessToken(token) {
    sessionStorage.setItem(accessTokenKey, token);
}


export function getAccessToken() {
    return sessionStorage.getItem(accessTokenKey);
}