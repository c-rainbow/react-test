import React from "react";
import CollapsableBigCard from "./CollapsableBigCard";
import SearchBar from "../components/SearchBar";
import create from "zustand";


const TwitchApiClient = window.twitchapiclient.TwitchApiClient;


export const [useVideoCache] = create(set => ({
  videoData: null,
  searchedId: null,
  setSearchResult: (data, searchedId) => set({videoData: data, searchedId}),
}));


function convertToLocalTime(utcTimeStr, locale="ko-kr") {
  const dateObj = new Date(utcTimeStr);
  // dateStr, timeStr follow the browser time/locale
  const dateStr = dateObj.toLocaleDateString(locale);
  const timeStr = dateObj.toLocaleTimeString(locale);
  return `${dateStr} ${timeStr}`;
}

function getTimeDisplayStr(totalSeconds) {
  //totalSeconds = Math.floor(totalSeconds);
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds = totalSeconds % 3600;
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}


function VideoInfoElem(props) {
  const videoData = props.videoData;
  const searchedId = props.searchedId;
  if(!searchedId) {  // Initial state without any previous search
    return null;
  }
  if(!videoData) {
    return (
      <div className="mt-2">
        <div className="m-1 text-danger d-flex justify-content-center">
          영상을 찾을 수 없습니다: {searchedId}
        </div>
      </div>
    )
  }

  const channel = videoData.channel;
  let userDisplayString = channel.display_name;
  if(channel.display_name.toLowerCase() !== channel.name.toLowerCase()) {
    userDisplayString += `(${channel.name})`;
  }
  return (
    <div className="mt-2">
      <div className="my-1 d-flex justify-content-center">
        <img src={videoData.preview?.medium} alt="video preview" />
      </div>
      <div className="my-1 ml-3">제목: {videoData.title}</div>
      <div className="my-1 ml-3">스트리머: {userDisplayString}</div>
      <div className="my-1 ml-3">업로드 : {convertToLocalTime(videoData.created_at)}</div>
      <div className="my-1 ml-3">카테고리: {videoData.game}</div>
      <div className="my-1 ml-3">길이: {getTimeDisplayStr(videoData.length)}</div>
      <div className="my-1 d-flex justify-content-center">
        <button className="btn btn-primary">다운로드 시작</button>
      </div>
    </div>
  )
}


export default function ChatDownloaderCard(props) {
  const inputRef = React.createRef();
  const [videoData, searchedId, setSearchResult] = useVideoCache(
      state => [state.videoData, state.searchedId, state.setSearchResult]);

  const onButtonClick = async function() {
    const value = inputRef.current.value.trim();
    if(!value) {
      return;
    }
    const data = await TwitchApiClient.getVideo(value);
    setSearchResult(data, value);
    console.log("Data: " + JSON.stringify(data));
  }

  return (
    <CollapsableBigCard title={props.title} columnSizes="col-md-12 col-lg-6"
        collapsableBodyId="chat-downloader-id">
      <SearchBar placeholder="다시보기 번호 (예: 123456789)" inputRef={inputRef} onButtonClick={onButtonClick} />
      <VideoInfoElem videoData={videoData} searchedId={searchedId} />
    </CollapsableBigCard>
  )
}
