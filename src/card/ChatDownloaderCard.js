import React from "react";
import CollapsableBigCard from "./CollapsableBigCard";
import SearchBar from "../components/SearchBar";


const TwitchApiClient = window.twitchapiclient.TwitchApiClient;


export default function ChatDownloaderCard(props) {
  const inputRef = React.createRef();
  const onButtonClick = async function() {
    const value = inputRef.current.value.trim();
    if(!value) {
      return;
    }
    const data = await TwitchApiClient.getVideo(value);
    console.log("Data: " + JSON.stringify(data));
  }

  return (
    <CollapsableBigCard title={props.title} columnSizes="col-md-12 col-lg-6"
        collapsableBodyId="chat-downloader-id">
      <SearchBar placeholder="다시보기 번호 (예: 123456789)" inputRef={inputRef} onButtonClick={onButtonClick} />
      <div className="mt-2">테스트</div>
    </CollapsableBigCard>
  )
}
