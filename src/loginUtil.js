


const accessTokenKey = "twitch_chat_analyzer_access_token";


export function isLoggedIn() {
    const accessToken = getAccessToken();
    return accessToken !== null;
}

export function getAccessToken() {
    return sessionStorage.getItem(accessTokenKey);
}