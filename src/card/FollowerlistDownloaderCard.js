import React from "react";
import CollapsableBigCard from "./CollapsableBigCard";
import SearchBar from "../components/SearchBar"


export default function FollowerlistDownloaderCard(props) {
  const inputRef = React.createRef();
  const TwitchApiClient = window.twitchapiclient.TwitchApiClient;
  const onButtonClick = async function() {
    const value = inputRef.current.value;
    if(!value) {
      return;
    }
    const userdata = await TwitchApiClient.getUserByName(value);
    console.log("userdata: " + JSON.stringify(userdata));
  }

  return (
    <CollapsableBigCard title={props.title} columnSizes="col-sm-12 col-md-6" collapsableBodyId="followerlist-downloader-id">
      <SearchBar placeholder="스트리머 아이디(영어)" inputRef={inputRef} onButtonClick={onButtonClick} />
      <div className="mt-2">스트리머 정보 들어가는 칸</div>
    </CollapsableBigCard>
  )
}
