import React from "react";
import CollapsableBigCard from "./CollapsableBigCard";
import SearchBar from "../components/SearchBar";


export default function ChatDownloaderCard(props) {
  const inputRef = React.createRef();
  const TwitchApiClient = window.twitchapiclient.TwitchApiClient;
  const onButtonClick = async function() {
    const value = inputRef.current.value.trim();
    if(!value) {
      return;
    }
    const data = await TwitchApiClient.getVideo(value);
    console.log("Data: " + JSON.stringify(data));
  }

  return (
    <CollapsableBigCard title={props.title} columnSizes="col-sm-12 col-md-6" collapsableBodyId="chat-downloader-id">
      <SearchBar placeholder="다시보기 번호 (예: 123456789)" inputRef={inputRef} onButtonClick={onButtonClick} />
      <div className="mt-2">테스트</div>
    </CollapsableBigCard>
  )
}


/*
(async () => {
  const TwitchApiClient = window.twitchapiclient.default;
  const client = new TwitchApiClient();
  const video = await client.getVideo("705708598");
  console.log("video: " + JSON.stringify(video));
})();
*/